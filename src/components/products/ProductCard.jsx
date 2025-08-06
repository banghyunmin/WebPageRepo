import React from 'react';

function ProductCard({ product }) {
  const { name, description, price, imageUrl } = product;

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <span className="product-price">{price}</span>
        <button className="buy-button">자세히 보기</button>
      </div>
    </div>
  );
}

export default ProductCard;
