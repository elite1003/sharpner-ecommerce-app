import React, { useState } from "react";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/CartContextProvider";
import Header from "./components/Layout/Header";
import HeaderSummary from "./components/Layout/HeaderSummary";
import Footer from "./components/Layout/Footer";
const App = () => {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCartHandler = () => {
    setIsCartShown((prev) => !prev);
  };
  return (
    <CartContextProvider>
      {isCartShown && <Cart onHideCart={showCartHandler} />}
      <Header onHideCart={showCartHandler} />
      <HeaderSummary />
      <main>
        <Product />
      </main>
      <Footer />
    </CartContextProvider>
  );
};

export default App;
