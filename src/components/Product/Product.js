import React from "react";
import "./Product.css";

const Product = ({ img, link }) => {
  return (
    <div className="product__Card">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="product__Img"></img>
      </a>
    </div>
  );
};

export default Product;
