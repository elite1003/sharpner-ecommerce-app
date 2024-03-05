import React, { useState } from "react";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/CartContextProvider";
import Header from "./components/Layout/Header";
import HeaderSummary from "./components/Layout/HeaderSummary";
import Footer from "./components/Layout/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/about", element: <About /> },
  { path: "/store", element: <Product /> },
  { path: "/contact-us", element: <ContactUs /> },
]);
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
        <RouterProvider router={router} />
      </main>
      <Footer />
    </CartContextProvider>
  );
};

export default App;
