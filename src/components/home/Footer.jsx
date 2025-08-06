import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} 방현민. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
