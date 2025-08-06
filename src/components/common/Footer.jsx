import React, { useState, useEffect } from 'react';

// 1. props로 message와 copyright를 받도록 하고, 기본값을 지정
const Footer = ({ 
    message = 'default message', 
    copyright = `© ${new Date().getFullYear()}. All rights reserved.` // 연도는 동적으로 생성
}) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1000);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const footerStyle = {
        padding: isMobile ? '20px' : '30px 20px',
        // marginTop: '40px', // App.js에서 레이아웃을 관리하므로 제거하거나 조정할 수 있습니다.
        backgroundColor: '#343a40',
        color: 'white',
        textAlign: 'center',
        borderRadius: '0 0 8px 8px',
    };

    const textStyle = {
        margin: '5px 0',
        fontSize: isMobile ? '0.8rem' : '0.9rem',
    };

    return (
        <footer style={footerStyle}>
            <p style={textStyle}>{message}</p>
            <p style={textStyle}>{copyright}</p>
        </footer>
    );
};

export default Footer;