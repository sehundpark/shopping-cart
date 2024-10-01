const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p className="product-description">{product.description}</p>
      <p>${product.price}</p>
      {/* Add more product details as needed */}
    </div>
  );
};

export default ProductCard;
