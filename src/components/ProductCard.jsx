import React, { useState } from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h3 className="product-title">{product.title}</h3>
      <div className="product-image-container">
        <img className="product-image" src={product.image} />
      </div>
      {/*<p className="product-description">{product.description}</p>*/}
      <p>${product.price}</p>
      <button className="add-to-cart-button">Add to Cart</button>
      {/* Add more product details as needed */}
    </div>
  );
};

export default ProductCard;
