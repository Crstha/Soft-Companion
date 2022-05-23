import React from "react";

import "./ProductList.css";
import Product from "../Product/Product";
import Products from "../../core/data/ProductData";
const ProductList = () => {
  return (
    <div className="product__Container">
      <div className="product__listTexts">
        <h1 className="product__title">Our Works</h1>
        <p className="product__desc">
          Building relationships. Earning the right to be heard. Planning and
          working alongside local leaders. Finding solutions to change the
          future for IT and the next generation. Here's just some of what we
          accomplished together in 2022.
        </p>
      </div>
      <div className="products__List">
        {Products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
