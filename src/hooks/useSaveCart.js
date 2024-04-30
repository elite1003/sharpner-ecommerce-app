import { useEffect, useContext } from "react";
import AuthContext from "../store/auth-context";
import CartContext from "../store/cart-context";

let firstRendering = true;
function useSaveCart() {
  const { email } = useContext(AuthContext);
  const { items, totalAmount } = useContext(CartContext);
  useEffect(() => {
    const saveCartToFirebase = async () => {
      try {
        const response = await fetch(
          `https://e-commerce-70e5a-default-rtdb.asia-southeast1.firebasedatabase.app/${email}/cart.json`,
          {
            method: "PUT",
            body: JSON.stringify({ items, totalAmount }),
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("addition failed to cart");
        }
      } catch (e) {
        alert(e.message);
      }
    };
    if (firstRendering) {
      firstRendering = false;
      return;
    }
    saveCartToFirebase();
  }, [email, items, totalAmount]);
}
export default useSaveCart;
