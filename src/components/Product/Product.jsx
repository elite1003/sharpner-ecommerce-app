import React from "react";
import AvailableProductContextProvider from "../../store/AvailableProductContextProvider";
import AvailableProduct from "./AvailableProduct";

const Product = () => {
  return (
    <AvailableProductContextProvider>
      <AvailableProduct />
    </AvailableProductContextProvider>
  );
};

export default Product;
