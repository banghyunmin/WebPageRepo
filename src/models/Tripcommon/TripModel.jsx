export const trips = {
    jeju: {
      pageTitle: "JEJU TRIP",
      tripTitle: "🌊 우리들의 신나는 제주 여행 ✈️",
      tripDate: "2025.09.07 ~ 2025.09.11",
      startDate: '2025-09-07',
      endDate: '2025-09-11',
      noticeList: [
        '📢 렌트카 및 숙소 예약 완료!',
        '📢 자세한 내용은 카톡방 공지를 확인해주세요.',
        '📢 여행자 보험 가입은 개별적으로 진행해야 합니다.',
      ],
      apiUrl: process.env.REACT_APP_API_JEJU
    },
    jejuTrip: {
      pageTitle: "JEJU TRIP 2",
      tripTitle: "🌊 우리들의 신나는 제주 여행 ✈️",
      tripDate: "2025.09.11 ~ 2025.09.14",
      startDate: '2025-09-11',
      endDate: '2025-09-14',
      noticeList: [
          '📢 렌트카 및 숙소 예약 완료!',
          '📢 자세한 내용은 카톡방 공지를 확인해주세요.',
          '📢 여행자 보험 가입은 개별적으로 진행해야 합니다.',
      ],
      apiUrl: process.env.REACT_APP_API_JEJU_TRIP
    },
    summer2025: {
      pageTitle: "HONGCHUN TRIP",
      tripTitle: "🌊 우리들의 신나는 홍천 여행 ✈️",
      tripDate: "2025.08.14 ~ 2025.08.15",
      startDate: '2025-08-14',
      endDate: '2025-08-15',
      noticeList: [
          '📢 숙소 예약 완료!',
          '📢 오션월드 예약은 개별적으로 진행해야 합니다.',
          '📢 자세한 내용은 카톡방 공지를 확인해주세요.',
      ],
      apiUrl: process.env.REACT_APP_API_SUMMER_2025
    }
  };