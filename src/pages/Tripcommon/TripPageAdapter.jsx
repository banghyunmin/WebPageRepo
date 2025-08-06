import React from 'react';
import TripPage from './TripPage'; // UI를 그리는 프레젠테이셔널 컴포넌트
import { trips } from '../../models/Tripcommon/TripModel'; // 데이터 파일

const TripPageAdapter = ({ tripType }) => {
  // tripType ('jeju', 'jejuTrip' 등) 에 맞는 데이터를 가져옵니다.
  const tripProps = trips[tripType];

  // 만약 해당하는 여행 데이터가 없다면 에러 메시지 등을 보여줄 수 있습니다.
  if (!tripProps) {
    return <div>해당하는 여행 정보가 없습니다.</div>;
  }

  // 실제 UI를 그리는 TripPage에 데이터(props)를 그대로 전달합니다.
  return <TripPage {...tripProps} />;
};

export default TripPageAdapter;