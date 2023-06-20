// FileMakerClient.jsx
import React, { useState } from 'react';
import TableList from './TableList/TableList';
import TableSearch from './TableSearch/TableSearch';
import RecordQuery from './RecordQuery/RecordQuery';
import RecordList from './RecordList/RecordList';
import './FileMakerClient.css';

function FileMakerClient() {
  const [data, setData] = useState(null);
  const [tableName, setTableName] = useState('');
  const [recordId, setRecordId] = useState('');

  return (
    <div className="filemaker-container">
      {/* Table List Section */}
      <TableList 
        setTableName={setTableName}
      />

      {/* Table Search Section */}
      <TableSearch
        tableName={tableName}
        setTableName={setTableName}
        setData={setData}
      />

      {/* Record Query Section */}
      <RecordQuery
        tableName={tableName}
        setData={setData}
        recordId={recordId}
      />

      {/* Record List Section */}
      <RecordList 
        data={data} 
        setRecordId={setRecordId}
      />
    </div>
  );
}

export default FileMakerClient;
