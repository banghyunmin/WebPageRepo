import React from 'react';

function Features() {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <span className="feature-icon">✨</span>
            <h3>최고급 디자인</h3>
            <p>세계적인 디자이너가 설계한 감각적인 외관</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🚀</span>
            <h3>압도적인 성능</h3>
            <p>최신 기술을 집약하여 구현한 놀라운 속도</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🛡️</span>
            <h3>강력한 내구성</h3>
            <p>수년간의 연구로 완성된 견고하고 안전한 설계</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
