import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <a className="logo">PEACEOFPEBBLES</a>
        <nav>
          <ul>
            <li><a href="#products">Products</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
