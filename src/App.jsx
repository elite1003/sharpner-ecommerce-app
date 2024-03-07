import React, { useState } from "react";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/CartContextProvider";
import Header from "./components/Layout/Header";
import HeaderSummary from "./components/Layout/HeaderSummary";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import { Route } from "react-router-dom/cjs/react-router-dom";
import AuthPage from "./components/Auth/AuthPage";
import UserProfile from "./components/Profile/UserProfile";

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
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/store">
          <Product />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="/auth">
          <AuthPage />
        </Route>
        <Route path="/profile">
          <UserProfile />
        </Route>
      </main>
      <Footer />
    </CartContextProvider>
  );
};

export default App;
