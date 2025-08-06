import React, { useState, useEffect } from 'react';
import Header from '../../components/common/Header';
import DdayCounter from '../../components/common/DdayCounter';
import NoticeBoard from '../../components/common/NoticeBoard';
import Schedule from '../../components/Tripcommon/Schedule';
import PreparationList from '../../components/Tripcommon/PreparationList';
import Footer from '../../components/common/Footer';
import AddScheduleForm from '../../components/Tripcommon/AddScheduleForm';

// 이제 title, startDate, apiUrl 등 모든 데이터를 props로 받습니다.
const TripPage = ({ pageTitle, tripTitle, tripDate, startDate, endDate, noticeList, apiUrl }) => {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  const [scheduleRefreshKey, setScheduleRefreshKey] = useState(0);
  const handleScheduleAdded = () => {
    setScheduleRefreshKey(prevKey => prevKey + 1);
  };

  const pageStyle = { fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '20px auto', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px' };
  const componentGap = { marginTop: '20px' };

  return (
    <div style={pageStyle}>
      <Header title={tripTitle} subtitle={tripDate} />
      <div style={componentGap}><DdayCounter startDate={startDate} endDate={endDate} /></div>
      <div style={componentGap}><NoticeBoard itemList={noticeList} /></div>
      
      <div style={componentGap}><Schedule refreshKey={scheduleRefreshKey} API_URL={apiUrl} /></div>
      <div style={componentGap}><AddScheduleForm onScheduleAdded={handleScheduleAdded} API_URL={apiUrl} /></div>

      <div style={componentGap}><PreparationList /></div>
      <Footer message="모두 함께 잊지 못할 추억을 만들어봐요!" copyright={`© ${new Date().getFullYear()} Our Trip. All rights reserved.`} />
    </div>
  );
};

export default TripPage;