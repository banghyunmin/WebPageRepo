import React from 'react';
import ProductCard from './ProductCard';

// 실제로는 API를 통해 받아올 데이터 예시입니다.
const sampleProducts = [
  {
    id: 1,
    name: '단품 구매',
    description: '모든 필수 기능을 갖춘 합리적인 선택',
    price: '₩4,900',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Basic+Model'
  },
  {
    id: 2,
    name: '세트 구매',
    description: '전문가를 위한 최고의 성능과 디자인',
    price: '₩30,000',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Pro+Model'
  },
];

function ProductList() {
  return (
    <section id="products" className="product-list">
      <div className="container">
        <h2>Our Products</h2>
        <div className="product-grid">
          {sampleProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductList;
