import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <p>&copy; {currentYear} PEACEOFPEBBLES. All Rights Reserved.</p>
        <p>
            연락처: 010-5927-6513<br/>
            이메일: Info@bangbae.company<br/>
            인스타: @peaceofpebbles
        </p>
      </div>
    </footer>
  );
}

export default Footer;
