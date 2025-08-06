import React, { useState, useEffect } from 'react';

// 1. props로 itemList를 받도록 수정하고, 기본값을 빈 배열로 설정
const NoticeBoard = ({ itemList = [] }) => { 
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1000);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const noticeStyle = {
        padding: '20px',
        margin: isMobile ? '20px 15px' : '20px', // 여백 일관성을 위해 상단 여백 추가
        border: '1px solid #ffecb3',
        borderRadius: '8px',
        backgroundColor: '#fffbeb',
    };

    const titleStyle = {
        fontSize: isMobile ? '1.2rem' : '1.5rem',
        color: '#d32f2f',
        marginBottom: '15px',
    };

    const listStyle = {
        listStyleType: 'none',
        paddingLeft: '0',
    };

    const listItemStyle = {
        padding: '8px 0',
        fontSize: isMobile ? '0.9rem' : '1rem',
        borderBottom: '1px solid #f5f5f5',
    };

    /* 2. 컴포넌트 내부에 있던 하드코딩된 notices 배열을 제거
    const notices = [
        '📢 숙소 예약 완료!',
        '📢 오션월드 예약은 개별적으로 진행해야 합니다.',
        '📢 여행자 보험 가입은 개별적으로 진행해야 합니다.',
        '📢 자세한 내용은 카톡방 공지를 확인해주세요.',
    ];
    */

    return (
        <div style={noticeStyle}>
            <h2 style={titleStyle}>🚨 중요 공지사항</h2>
            <ul style={listStyle}>
                {/* 3. props로 받은 itemList를 map으로 렌더링 */}
                {itemList.map((item, index) => (
                    <li 
                      key={index} 
                      style={{ 
                        ...listItemStyle, 
                        // 4. 마지막 아이템의 borderBottom을 제거하는 로직도 itemList 기준으로 변경
                        borderBottom: index === itemList.length - 1 ? 'none' : listItemStyle.borderBottom 
                      }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NoticeBoard;