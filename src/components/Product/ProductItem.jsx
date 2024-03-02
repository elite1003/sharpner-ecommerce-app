import React from "react";

const ProductItem = (props) => {
  return (
    <li>
      <h2>{props.title}</h2>
      <img src={props.imgUrl} alt={props.title} />
      <h3>{props.price}</h3>
    </li>
  );
};

export default ProductItem;
