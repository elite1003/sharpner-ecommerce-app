import React, { useReducer } from "react";
import AvailableProductContext from "./available-product-context";

const defaultState = {
  items: [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ],
};

const availableProductReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    return {
      items: updatedItems,
    };
  }
  return defaultState;
};

const AvailableProductContextProvider = (props) => {
  const [availableProductState, dispatchAvailableProductAction] = useReducer(
    availableProductReducer,
    defaultState
  );

  const addAvailableProductHandler = (item) => {
    dispatchAvailableProductAction({ type: "ADD", item: item });
  };

  const availableProductContext = {
    items: availableProductState.items,
    addItem: addAvailableProductHandler,
  };
  return (
    <AvailableProductContext.Provider value={availableProductContext}>
      {props.children}
    </AvailableProductContext.Provider>
  );
};

export default AvailableProductContextProvider;
