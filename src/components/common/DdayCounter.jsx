import React, { useState, useEffect } from 'react';

// 1. startDate와 endDate 두 개의 props를 받도록 수정
const DdayCounter = ({ startDate, endDate }) => {
    const [dDay, setDday] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1000);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // 2. 두 날짜 prop이 모두 유효한지 확인
        if (!startDate || !endDate) {
            setDday('여행 날짜를 지정해주세요.');
            return;
        }

        const start = new Date(startDate);
        const end = new Date(endDate);
        const today = new Date();

        // 정확한 날짜 계산을 위해 모든 시간 정보를 0으로 초기화
        start.setHours(0, 0, 0, 0);
        end.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);
        
        // 3. 오늘 날짜를 기준으로 조건 분기
        if (today < start) {
            // 여행 시작 전: D-Day 카운트
            const gap = start.getTime() - today.getTime();
            const result = Math.ceil(gap / (1000 * 60 * 60 * 24));
            setDday(`여행 출발까지 D-${result}`);
        } else if (today > end) {
            // 여행 종료 후: D+Day 카운트
            const gap = today.getTime() - end.getTime();
            const result = Math.ceil(gap / (1000 * 60 * 60 * 24));
            setDday(`여행 종료 D+${result}`);
        } else {
            // 여행 중 (시작일과 종료일 포함)
            setDday('🎉 즐거운 여행 중입니다! ✈️');
        }

    }, [startDate, endDate]); // 4. 두 날짜가 변경될 때마다 다시 계산

    const dDayStyle = {
        textAlign: 'center',
        fontSize: isMobile ? '1rem' : '1.8rem',
        fontWeight: '600',
        color: '#333',
        padding: '30px 20px',
        backgroundColor: '#f8f9fa',
        margin: isMobile ? '20px 15px' : '20px',
        borderRadius: '8px',
    };

    return (
        <div style={dDayStyle}>
            <h2>{dDay}</h2>
        </div>
    );
};

export default DdayCounter;