import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo">방현민</a>
        <nav>
          <ul>
            <li><a href="#about">소개</a></li>
            <li><a href="#projects">프로젝트</a></li>
            <li><a href="#contact">연락처</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
