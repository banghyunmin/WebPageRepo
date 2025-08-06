import React from 'react';

// 컴포넌트를 불러오는 상대 경로가 수정되었습니다.
import Header from '../../components/home/Header';
import Hero from '../../components/home/Hero';
import About from '../../components/home/About';
import Projects from '../../components/home/Projects';
import Contact from '../../components/home/Contact';
import Footer from '../../components/home/Footer';

// 스타일시트를 불러오는 상대 경로가 수정되었습니다.
import '../../homepage.css'; 

function MyPage() {
  return (
    <div className="homepage">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default MyPage;
