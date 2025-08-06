import React, { useState, useEffect } from 'react';

const DocumentEditor = ({ mode = 'create', defaultValue = {}, onSubmit, onCancel }) => {
  const [json, setJson] = useState(JSON.stringify(defaultValue, null, 2));
  const [error, setError] = useState(null);

  useEffect(() => {
    setJson(JSON.stringify(defaultValue, null, 2));
  }, [defaultValue]);

  const handleSubmit = () => {
    try {
      const parsed = JSON.parse(json);
      onSubmit(parsed);
    } catch (err) {
      setError('유효하지 않은 JSON 형식입니다.');
    }
  };

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '1rem' }}>
      <h3>{mode === 'edit' ? '문서 수정' : '새 문서 추가'}</h3>
      <textarea
        rows={10}
        style={{ width: '100%', fontFamily: 'monospace' }}
        value={json}
        onChange={e => {
          setJson(e.target.value);
          setError(null);
        }}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleSubmit}>저장</button>
      <button onClick={onCancel}>취소</button>
    </div>
  );
};

export default DocumentEditor;