import { useContext, useEffect } from "react";
import AuthContext from "../store/auth-context";
import CartContext from "../store/cart-context";

let firstRendering = true;
function useInitCart() {
  const { email } = useContext(AuthContext);
  const { initCart } = useContext(CartContext);
  useEffect(() => {
    const fetchCart = async () => {
      if (!email) return;
      try {
        let initialItems = [];
        let totalAmount = 0;
        const response = await fetch(
          `https://e-commerce-70e5a-default-rtdb.asia-southeast1.firebasedatabase.app/${email}/cart.json`
        );
        if (!response.ok) {
          throw new Error("cart fetch from backend failed");
        }
        const data = await response.json();
        if (data) {
          initialItems = data.items || [];
          totalAmount = data.totalAmount;
        }
        initCart({ initialItems, totalAmount });
      } catch (e) {
        alert(e.message);
      }
    };
    if (firstRendering) {
      fetchCart();
      firstRendering = false;
    }
  }, [email, initCart]);
}

export default useInitCart;
