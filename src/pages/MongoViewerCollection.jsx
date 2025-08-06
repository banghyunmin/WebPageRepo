import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDocuments, deleteDocument } from '../hooks/useMongoAPI';

const MongoViewerCollection = () => {
  const { collectionName } = useParams();
  const [documents, setDocuments] = useState([]);

  // 데이터 로드
  const loadData = () => {
    fetchDocuments(collectionName).then(setDocuments);
  };

  useEffect(() => {
    loadData();
  }, [collectionName]);

  // 삭제 핸들러
  const handleDelete = async (id) => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      await deleteDocument(collectionName, id);
      loadData();
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📄 컬렉션: {collectionName}</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            {documents[0] && Object.keys(documents[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
            <th>작업</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, i) => (
            <tr key={i}>
              {Object.values(doc).map((val, j) => (
                <td key={j}>{JSON.stringify(val)}</td>
              ))}
              <td>
                <button onClick={() => alert('수정은 아직 구현 안 됨')} style={{ marginRight: '8px' }}>수정</button>
                <button onClick={() => handleDelete(doc._id)}>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MongoViewerCollection;
