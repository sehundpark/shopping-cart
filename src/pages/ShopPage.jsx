import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";

const ShopPage = () => {
  return (
    <div className="shop-page">
      <h2>Shop Page</h2>
      <div className="products-grid">
        <ProductList />
      </div>
    </div>
  );
};

export default ShopPage;
