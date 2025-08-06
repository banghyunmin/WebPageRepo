import React, { useEffect, useState } from 'react';
import { fetchDocuments, insertDocument, updateDocument, deleteDocument } from '../hooks/useMongoAPI';
import CollectionSelector from '../components/CollectionSelector';
import DocumentTable from '../components/DocumentTable';

const MongoViewer = () => {
  const [db, setDb] = useState("mydb");
  const [collection, setCollection] = useState("myCollection");
  const [documents, setDocuments] = useState([]);

  const loadData = async () => {
    const docs = await fetchDocuments(db, collection);
    setDocuments(docs);
  };

  useEffect(() => {
    loadData();
  }, [db, collection]);

  return (
    <div>
      <CollectionSelector db={db} setDb={setDb} collection={collection} setCollection={setCollection} />
      <DocumentTable
        documents={documents}
        onReload={loadData}
        onDelete={(id) => deleteDocument(db, collection, id).then(loadData)}
        onUpdate={(id, doc) => updateDocument(db, collection, id, doc).then(loadData)}
        onInsert={(doc) => insertDocument(db, collection, doc).then(loadData)}
      />
    </div>
  );
};

export default MongoViewer;