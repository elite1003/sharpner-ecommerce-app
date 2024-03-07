import React, { useState, useContext } from "react";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/CartContextProvider";
import Header from "./components/Layout/Header";
import HeaderSummary from "./components/Layout/HeaderSummary";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import { Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom";
import AuthPage from "./components/Auth/AuthPage";
import UserProfile from "./components/Profile/UserProfile";
import AuthContext from "./store/auth-context";
const App = () => {
  const [isCartShown, setIsCartShown] = useState(false);
  const authCtx = useContext(AuthContext);
  const showCartHandler = () => {
    setIsCartShown((prev) => !prev);
  };
  return (
    <CartContextProvider>
      {isCartShown && <Cart onHideCart={showCartHandler} />}
      <Header onHideCart={showCartHandler} />
      <HeaderSummary />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          {!authCtx.isLoggedIn && (
            <Route path="/auth">
              <AuthPage />
            </Route>
          )}
          {authCtx.isLoggedIn && (
            <>
              <Route path="/store">
                <Product />
              </Route>
              <Route path="/profile">
                <UserProfile />
              </Route>
            </>
          )}
          <Route path="*">
            <Redirect to="/auth" />
          </Route>
        </Switch>
      </main>
      <Footer />
    </CartContextProvider>
  );
};

export default App;
