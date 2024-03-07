import React, { useReducer, useEffect, useCallback } from "react";
import CartContext from "./cart-context";

const cartReducer = (state, action) => {
  if (action.type === "INIT") {
    return {
      items: action.item.data,
      totalAmount: action.item.totalAmount,
    };
  }
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + +action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount =
      state.totalAmount - existingCartItem.price * existingCartItem.amount;
    const updatedItems = state.items.filter((item) => item.id !== action.id);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return { items: [], totalAmount: 0 };
};

const CartContextProvider = (props) => {
  const fetchCart = useCallback(async () => {
    try {
      let initialState = [];
      let totalAmount = 0;
      const response = await fetch(
        "https://swapi-movie-app-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );
      if (!response.ok) {
        throw new Error("cart fetch from backend failed");
      }
      const data = await response.json();
      for (let key in data) {
        initialState.push({ ...data[key], name: key });
        totalAmount += data[key].amount * data[key].price;
      }
      dispatchCartAction({
        type: "INIT",
        item: { data: initialState, totalAmount: totalAmount },
      });
    } catch (e) {
      alert(e.message);
    }
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const [cartState, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  const addItemToCartHandler = async (item) => {
    try {
      const response = await fetch(
        "https://swapi-movie-app-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("addition failed to cart");
      }
      const data = await response.json();
      dispatchCartAction({ type: "ADD", item: { ...item, name: data.name } });
    } catch (e) {
      alert(e.message);
    }
  };

  const removeItemFromCartHandler = async (id, name) => {
    try {
      const response = await fetch(
        `https://swapi-movie-app-default-rtdb.asia-southeast1.firebasedatabase.app/cart/${name}.json`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Deletion failed from cart");
      }
      dispatchCartAction({ type: "REMOVE", id: id });
    } catch (e) {
      alert(e.message);
    }
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
