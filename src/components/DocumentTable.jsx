import React from 'react';

const DocumentTable = ({ documents, onDelete, onUpdate, onInsert }) => {
  return (
    <table>
      <thead>
        <tr>{Object.keys(documents[0] || {}).map(key => <th key={key}>{key}</th>)}</tr>
      </thead>
      <tbody>
        {documents.map(doc => (
          <tr key={doc._id}>
            {Object.values(doc).map((val, i) => <td key={i}>{JSON.stringify(val)}</td>)}
            <td>
              <button onClick={() => onDelete(doc._id)}>삭제</button>
              {/* 수정 버튼 추가 가능 */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DocumentTable;