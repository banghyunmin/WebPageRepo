import React, { useState } from 'react';

// onScheduleAdded: 일정이 성공적으로 추가되었을 때 부모 컴포넌트에 알리는 함수
const AddScheduleForm = ({ onScheduleAdded, API_URL }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // 폼 기본 제출 동작 방지
    setMessage('');

    if (!date || !time || !description) {
      setMessage('⚠️ 모든 필드를 입력해주세요.');
      return;
    }

    try {
      // 백엔드 API(http://localhost:5001/api/schedules)로 POST 요청
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          scheduleDate: date,
          scheduleTime: time,
          scheduleDescription: description,
        }),
      });

      if (!response.ok) {
        throw new Error('서버 응답이 올바르지 않습니다.');
      }

      setMessage('✅ 일정이 성공적으로 추가되었습니다!');
      // 폼 초기화
      setDate('');
      setTime('');
      setDescription('');
      
      // 부모 컴포넌트에 일정 추가 사실을 알림 (일정 목록 새로고침 목적)
      if (onScheduleAdded) {
        onScheduleAdded();
      }

    } catch (error) {
      setMessage(`❌ 오류가 발생했습니다: ${error.message}`);
      console.error('Fetch error:', error);
    }
  };

  // --- 스타일 정의 ---
  const formStyle = { padding: '20px', margin: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' };
  const inputGroupStyle = { marginBottom: '15px' };
  const labelStyle = { display: 'block', marginBottom: '5px', fontWeight: 'bold' };
  const inputStyle = { width: '100%', padding: '8px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' };
  const buttonStyle = { width: '100%', padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1rem' };
  const messageStyle = { marginTop: '15px', fontWeight: 'bold' };

  return (
    <div style={formStyle}>
      <h2>✏️ 새 일정 추가</h2>
      <form onSubmit={handleSubmit}>
        <div style={inputGroupStyle}>
          <label htmlFor="schedule-date" style={labelStyle}>날짜</label>
          <input type="date" id="schedule-date" value={date} onChange={(e) => setDate(e.target.value)} style={inputStyle} />
        </div>
        <div style={inputGroupStyle}>
          <label htmlFor="schedule-time" style={labelStyle}>시간</label>
          <input type="time" id="schedule-time" value={time} onChange={(e) => setTime(e.target.value)} style={inputStyle} />
        </div>
        <div style={inputGroupStyle}>
          <label htmlFor="schedule-desc" style={labelStyle}>내용</label>
          <input type="text" id="schedule-desc" value={description} placeholder="일정 내용을 입력하세요" onChange={(e) => setDescription(e.target.value)} style={inputStyle} />
        </div>
        <button type="submit" style={buttonStyle}>추가하기</button>
      </form>
      {message && <p style={messageStyle}>{message}</p>}
    </div>
  );
};

export default AddScheduleForm;