import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCollectionList } from '../hooks/useMongoAPI';

const MongoViewerEntry = () => {
  const [collections, setCollections] = useState([]);
  const [selected, setSelected] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchCollectionList().then(setCollections);
  }, []);

  const handleSubmit = () => {
    if (selected) {
      navigate(`/mongo-viewer/${selected}`);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📂 MongoDB 컬렉션 선택</h2>
      <select value={selected} onChange={e => setSelected(e.target.value)}>
        <option value="">-- 컬렉션 선택 --</option>
        {collections.map(col => (
          <option key={col} value={col}>{col}</option>
        ))}
      </select>
      <button onClick={handleSubmit} disabled={!selected} style={{ marginLeft: '1rem' }}>
        조회
      </button>
    </div>
  );
};

export default MongoViewerEntry;