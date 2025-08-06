import React from 'react';

// 컴포넌트 불러오기
import Header from '../../components/products/Header';
import ProductHero from '../../components/products/ProductHero';
import ProductList from '../../components/products/ProductList';
import Features from '../../components/products/Features';
import Footer from '../../components/products/Footer';

// 스타일시트 불러오기
import '../../products.css';

function ProductsPage() {
  return (
    <div className="products-site">
      <Header />
      <main>
        <ProductHero />
        <ProductList />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default ProductsPage;
