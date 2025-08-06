import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>연락처</h2>
        <p>언제든지 편하게 연락 주세요!</p>
        <div className="contact-info">
          <p>Email: <a href="mailto:bang14759@naver.com">bang14759@naver.com</a></p>
          {/* <p>Phone: <a href="tel:010-4633-6513">010-4633-6513</a></p> */}
          <p>GitHub: <a href="" target="_blank" rel="noopener noreferrer"></a></p>
          <p>LinkedIn: <a href="" target="_blank" rel="noopener noreferrer"></a></p>
          {/* <p>Instagram <a href="https://instagram.com/hmbang.xyz">@hmbang.xyz</a></p> */}
        </div>
      </div>
    </section>
  );
}

export default Contact;
