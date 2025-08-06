import React, { useState, useEffect } from 'react';

// 1. props로 title, subtitle을 받도록 수정하고 기본값을 지정
const Header = ({ title = 'TITLE', subtitle = 'SubTitle' }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
      const handleResize = () => {
          setIsMobile(window.innerWidth < 1000);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);

  const headerStyle = {
      padding: isMobile ? '30px 20px' : '40px 20px',
      backgroundColor: '#007BFF',
      color: 'white',
      textAlign: 'center',
      borderRadius: '8px 8px 0 0',
  };

  const titleStyle = {
      margin: '0',
      fontSize: isMobile ? '1.6rem' : '2.5rem',
      fontWeight: 'bold',
  };

  const subtitleStyle = {
      margin: '10px 0 0',
      fontSize: isMobile ? '0.7rem' : '1.2rem',
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>{title}</h1>
      <p style={subtitleStyle}>{subtitle}</p>
    </header>
  );
};

export default Header;