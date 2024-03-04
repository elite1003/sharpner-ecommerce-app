import React, { useContext } from "react";
import AvailableProductContext from "../../store/available-product-context";

const AvailableProduct = () => {
  const availableProductCtx = useContext(AvailableProductContext);

  const { items } = availableProductCtx;
  const productList = items.map((product) => (
    <li key={product.title}>
      <h2>{product.title}</h2>
      <img src={product.imageUrl} alt={product.title} />
      <h3>{product.price}</h3>
    </li>
  ));
  return (
    <div>
      <ul>{productList}</ul>
    </div>
  );
};

export default AvailableProduct;
