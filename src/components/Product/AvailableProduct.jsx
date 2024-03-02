import React, { useContext } from "react";
import AvailableProductContext from "../../store/available-product-context";
import ProductItem from "./ProductItem";

const AvailableProduct = () => {
  const availableProductCtx = useContext(AvailableProductContext);

  const { items } = availableProductCtx;
  const productList = items.map((product) => (
    <ProductItem
      key={product.title}
      title={product.title}
      price={product.price}
      imgUrl={product.imageUrl}
    />
  ));
  return (
    <div>
      <ul>{productList}</ul>
    </div>
  );
};

export default AvailableProduct;
