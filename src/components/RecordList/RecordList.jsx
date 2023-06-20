// RecordList.jsx
import React from 'react';
import './RecordList.css';

function RecordList({ data, setRecordId }) {
  const handleRecordClick = (recordId) => {
    setRecordId(recordId);
  };
  
  return (
    <div className="list-section">
      <ul>
        {data && data.map((record, index) => (
          <li key={index} onClick={() => handleRecordClick(record.id)}>
            Record ID: {record.id},
            Field Name: {record.fieldName},
            Value: {record.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecordList;
