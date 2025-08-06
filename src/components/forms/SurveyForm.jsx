// src/components/forms/SurveyForm.js

import React, { useState, useEffect } from 'react';
import './SurveyForm.css';

const SurveyForm = ({ questions, onSubmit }) => {
  const getInitialState = () => {
    return questions.reduce((acc, question) => {
      acc[question.id] = '';
      return acc;
    }, {});
  };

  const [formData, setFormData] = useState(getInitialState());

  useEffect(() => {
    setFormData(getInitialState());
  }, [questions]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(getInitialState());
  };

  const renderQuestion = (question) => {
    const commonProps = {
      name: question.id,
      onChange: handleChange,
      required: question.required,
    };

    switch (question.type) {
      case 'text':
        return (
          <input
            type="text"
            {...commonProps}
            value={formData[question.id] || ''}
            placeholder={question.placeholder}
          />
        );
      case 'radio':
        return (
          <div className="radio-group">
            {question.options.map((option) => (
              <label key={option.value}>
                <input
                  type="radio"
                  {...commonProps}
                  value={option.value}
                  checked={formData[question.id] === option.value}
                />
                {option.label}
              </label>
            ))}
          </div>
        );
      case 'select':
        return (
          <select {...commonProps} value={formData[question.id] || ''}>
            <option value="" disabled>
              선택하세요...
            </option>
            {question.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case 'textarea':
        return (
          <textarea
            {...commonProps}
            value={formData[question.id] || ''}
            placeholder={question.placeholder}
            rows="4"
          />
        );
      default:
        return null;
    }
  };

  return (
    <form className="survey-form" onSubmit={handleSubmit}>
      {questions.map((question) => (
        <div className="form-group" key={question.id}>
          <label htmlFor={question.id}>{question.label}</label>
          {renderQuestion(question)}
        </div>
      ))}
      <button type="submit">제출하기</button>
    </form>
  );
};

export default SurveyForm;