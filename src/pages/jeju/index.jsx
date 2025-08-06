import React, { useState, useEffect } from 'react';
import Header from '../../components/common/Header';
import DdayCounter from '../../components/common/DdayCounter';
import NoticeBoard from '../../components/common/NoticeBoard';
import Schedule from '../../components/Tripcommon/Schedule';
import PreparationList from '../../components/Tripcommon/PreparationList';
import Footer from '../../components/common/Footer';
import AddScheduleForm from '../../components/Tripcommon/AddScheduleForm';

const JejuPage = () => {
  useEffect(() => {
    document.title = "JEJU TRIP";
  }, []);

  const API_URL = process.env.REACT_APP_API_JEJU;
  const startDate = '2025-09-07';
  const endDate = '2025-09-11';
  const myNoticeList = [
    '📢 렌트카 및 숙소 예약 완료!',
    '📢 자세한 내용은 카톡방 공지를 확인해주세요.',
    '📢 여행자 보험 가입은 개별적으로 진행해야 합니다.',
  ];
  const tripTitle = "🌊 우리들의 신나는 제주 여행 ✈️";
  const tripDate = "2025.09.07 ~ 2025.09.11";
  const footerMessage = "모두 함께 잊지 못할 추억을 만들어봐요!";
  const footerCopyright = "© 2025 Our Jeju Trip. All rights reserved.";

  const [scheduleRefreshKey, setScheduleRefreshKey] = useState(0);
  const handleScheduleAdded = () => {
    setScheduleRefreshKey(prevKey => prevKey + 1);
  };

  const pageStyle = { fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '20px auto', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px' };
  const componentGap = { marginTop: '20px' };

  return (
    <div style={pageStyle}>
      <Header title={tripTitle} subtitle={tripDate}/>
      <div style={componentGap}><DdayCounter startDate={startDate} endDate={endDate}/></div>
      <div style={componentGap}><NoticeBoard itemList={myNoticeList}/></div>
      
      <div style={componentGap}><Schedule refreshKey={scheduleRefreshKey} API_URL={API_URL} /></div>
      <div style={componentGap}><AddScheduleForm onScheduleAdded={handleScheduleAdded} API_URL={API_URL} /></div>

      <div style={componentGap}><PreparationList /></div>
      <Footer message={footerMessage} copyright={footerCopyright}/>
    </div>
  );
};

export default JejuPage;