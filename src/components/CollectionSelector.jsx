import React from 'react';

const CollectionSelector = ({ db, setDb, collection, setCollection }) => {
  const dbOptions = ['mydb', 'testdb']; // 필요시 useEffect로 n8n에서 받아올 수 있음
  const collectionOptions = ['users', 'logs', 'settings']; // 마찬가지로 동적 처리 가능

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label>
        DB 선택:
        <select value={db} onChange={e => setDb(e.target.value)} style={{ marginLeft: '0.5rem' }}>
          {dbOptions.map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </label>

      <label style={{ marginLeft: '1rem' }}>
        컬렉션 선택:
        <select value={collection} onChange={e => setCollection(e.target.value)} style={{ marginLeft: '0.5rem' }}>
          {collectionOptions.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default CollectionSelector;