import React, { useState, useEffect } from 'react';

const PreparationList = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1000);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sectionStyle = {
        padding: '20px',
        margin: isMobile ? '0 15px' : '20px', // 모바일에서 좌우 여백 조정
        backgroundColor: '#f8f9fa',
        border: '1px solid #dee2e6',
        borderRadius: '8px',
    };

    const titleStyle = {
        fontSize: isMobile ? '1.0rem' : '1.5rem', // 모바일에서 제목 글자 크기 조정
        textAlign: 'center',
        marginBottom: '25px',
    };
    
    // PC에서는 row, 모바일에서는 column으로 변경
    const flexContainerStyle = {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-around',
        gap: isMobile ? '20px' : '0', // 모바일에서 세로 간격 추가
    };

    const columnStyle = {
        textAlign: 'center',
    };

    const subTitleStyle = {
        fontSize: isMobile ? '1.1rem' : '1.2rem',
        borderBottom: '2px solid #007BFF',
        paddingBottom: '5px',
        display: 'inline-block',
    };

    const listStyle = {
        listStyleType: 'none',
        padding: 0,
        fontSize: isMobile ? '0.95rem' : '1rem',
    };
    
    const listItemStyle = {
        padding: '8px 0',
        fontSize: isMobile ? '0.7rem' : '1rem', // 모바일에서 목록 글자 크기 조정
        borderBottom: '1px solid #f5f5f5',
    };

    return (
        <div style={sectionStyle}>
            <h2 style={titleStyle}>🎒 챙겨야 할 것들</h2>
            <div style={flexContainerStyle}>
                <div style={columnStyle}>
                    <h4 style={subTitleStyle}>필수 준비물</h4>
                    <ul style={listStyle}>
                        <li style={listItemStyle}>✅ 신분증 (필수!)</li>
                        <li style={listItemStyle}>✅ 개인 상비약</li>
                        <li style={listItemStyle}>✅ 편한 신발</li>
                        <li style={listItemStyle}>✅ 충분한 옷</li>
                    </ul>
                </div>
                <div style={columnStyle}>
                    <h4 style={subTitleStyle}>추천 준비물</h4>
                    <ul style={listStyle}>
                        <li style={listItemStyle}>👍 선크림, 선글라스</li>
                        <li style={listItemStyle}>👍 모자</li>
                        <li style={listItemStyle}>👍 카메라</li>
                        <li style={listItemStyle}>👍 보조배터리</li>
                        <li style={listItemStyle}>👍 수영복 (선택)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PreparationList;