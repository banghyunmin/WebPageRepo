// src/pages/forms/SurveyPage.js

import React from 'react';
import SurveyForm from '../../components/forms/SurveyForm';

const SurveyPage = () => {
  // ★★★ 바로 이 배열의 내용만 바꾸면 설문조사 항목이 변경됩니다 ★★★
  const userSatisfactionSurvey = [
    {
      id: 'username',
      label: '사용자 이름',
      type: 'text',
      required: true,
      placeholder: '이름을 입력하세요',
    },
    {
      id: 'satisfaction',
      label: '서비스 만족도',
      type: 'radio',
      required: true,
      options: [
        { label: '매우 만족', value: 'very-good' },
        { label: '만족', value: 'good' },
        { label: '보통', value: 'normal' },
        { label: '불만족', value: 'bad' },
      ],
    },
    {
      id: 'revisit',
      label: '재방문 의사',
      type: 'select',
      required: true,
      options: [
        { label: '예', value: 'yes' },
        { label: '아니오', value: 'no' },
        { label: '모르겠음', value: 'not-sure' },
      ],
    },
    {
      id: 'feedback',
      label: '추가 의견',
      type: 'textarea',
      required: false,
      placeholder: '자유롭게 의견을 남겨주세요.',
    },
  ];

  const handleFormSubmit = (data) => {
    console.log('최종 제출 데이터:', data);
    alert('설문조사 참여 감사합니다!');
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>사용자 만족도 조사</h1>
      <SurveyForm questions={userSatisfactionSurvey} onSubmit={handleFormSubmit} />
    </div>
  );
};

export default SurveyPage;