import React, { useState } from 'react';
import TableList from './TableList/TableList';
import TableSearch from './TableSearch/TableSearch';
import RecordQuery from './RecordQuery/RecordQuery';
import ListSection from './ListSection/ListSection';
import './FileMakerClient.css';

function FileMakerClient() {
  const [data, setData] = useState(null);
  const [tableName, setTableName] = useState('');

  return (
    <div className="filemaker-container">
      {/* Table List Section */}
      <TableList />

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
      />

      {/* List Section */}
      <ListSection data={data} />
    </div>
  );
}

export default FileMakerClient;
