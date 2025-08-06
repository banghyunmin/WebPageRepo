import React, { useState, useEffect, useCallback } from 'react';

// API에서 받은 데이터를 화면에 맞는 형식으로 가공하는 함수
const processScheduleData = (data) => {
  if (!data || data.length === 0) return {};

  // 날짜별로 그룹핑
  const grouped = data.reduce((acc, item) => {
    const date = item.scheduleDate;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(`${item.scheduleTime} - ${item.scheduleDescription}`);

    return acc;
  }, {});

  // 화면 표시용 최종 데이터 구조로 변환
  let dayCounter = 1;
  const formatted = {};
  const sortedDates = Object.keys(grouped).sort();

  for (const date of sortedDates) {
    const d = new Date(date);
    const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][d.getDay()];
    const formattedDate = `${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}`;
    const key = `${dayCounter}일차 (${formattedDate} ${dayOfWeek})`;
    formatted[key] = grouped[date];
    dayCounter++;
  }
  return formatted;
};


const Schedule = ({ refreshKey, API_URL }) => {
  const [scheduleData, setScheduleData] = useState({});
  const [activeTab, setActiveTab] = useState('');
  const [error, setError] = useState(null);

  const fetchSchedules = useCallback(async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('데이터를 불러오는 데 실패했습니다.');
      }
      const data = await response.json();
      const processedData = processScheduleData(data);
      setScheduleData(processedData);
      
      // 데이터 로드 후 첫 번째 탭을 활성 탭으로 설정
      const firstTab = Object.keys(processedData)[0];
      if (firstTab) {
        setActiveTab(firstTab);
      }
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchSchedules();
  }, [fetchSchedules, refreshKey]); // refreshKey가 변경될 때마다 데이터를 다시 불러옴

  // --- 이하 스타일 정의 (이전과 유사) ---
  const containerStyle = { padding: '20px', margin: '0 20px' };
  const tabContainerStyle = { display: 'flex', marginBottom: '20px', borderBottom: '2px solid #ddd', overflowX: 'auto' };
  const tabButtonStyle = { padding: '10px 15px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', fontSize: '1rem', color: '#888', fontWeight: '500', whiteSpace: 'nowrap' };
  const activeTabButtonStyle = { ...tabButtonStyle, color: '#007BFF', fontWeight: 'bold', borderBottom: '2px solid #007BFF', marginBottom: '-2px' };
  const contentStyle = { listStyleType: 'none', paddingLeft: '15px' };
  const listItemStyle = { padding: '8px 0', borderBottom: '1px dashed #eee' };
  
  if (error) {
    return <div style={containerStyle}><h2>🗓️ 여행 일정</h2><p>❌ {error}</p></div>;
  }
  
  if (Object.keys(scheduleData).length === 0) {
      return <div style={containerStyle}><h2>🗓️ 여행 일정</h2><p>등록된 일정이 없습니다. 새 일정을 추가해주세요!</p></div>;
  }

  return (
    <div style={containerStyle}>
      <h2>🗓️ 여행 일정</h2>
      <div style={tabContainerStyle}>
        {Object.keys(scheduleData).map((day) => (
          <button key={day} style={day === activeTab ? activeTabButtonStyle : tabButtonStyle} onClick={() => setActiveTab(day)}>
            {day.split(' ')[0]}
          </button>
        ))}
      </div>
      <div>
        {activeTab && (
          <>
            <h3 style={{ borderLeft: '4px solid #007BFF', paddingLeft: '10px' }}>{activeTab}</h3>
            <ul style={contentStyle}>
              {scheduleData[activeTab].map((activity, index) => (
                <li key={index} style={listItemStyle}>{activity}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Schedule;