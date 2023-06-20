// RecordQuery.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './RecordQuery.css';

function RecordQuery({ tableName, setData }) {
  const [recordId, setRecordId] = useState('');
  const [fieldName, setFieldName] = useState('');
  const [fieldValue, setFieldValue] = useState('');

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
  };

  const fetchRecord = async () => {
    try {
      const response = await axios.get(
        `https://YOUR_FILEMAKER_SERVER_URL/fmi/data/vLatest/databases/YOUR_DATABASE/layouts/${tableName}/records/${recordId}`,
        { headers }
      );
      setData(response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  const updateRecord = async () => {
    try {
      const response = await axios.patch(
        `https://YOUR_FILEMAKER_SERVER_URL/fmi/data/vLatest/databases/YOUR_DATABASE/layouts/${tableName}/records/${recordId}`,
        { [fieldName]: fieldValue },
        { headers }
      );
      setData(response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className="record-query-section">
      <div className="inputs-container">
        <input
          className="filemaker-input record-id-input"
          type="text"
          placeholder="Record ID"
          value={recordId}
          onChange={(e) => setRecordId(e.target.value)}
        />
        <div className="field-inputs">
          <input
            className="filemaker-input"
            type="text"
            placeholder="Field Name"
            value={fieldName}
            onChange={(e) => setFieldName(e.target.value)}
          />
          <input
            className="filemaker-input"
            type="text"
            placeholder="Field Value"
            value={fieldValue}
            onChange={(e) => setFieldValue(e.target.value)}
          />
        </div>
      </div>
      <div className="buttons-container">
        <button className="filemaker-button" onClick={fetchRecord}>
          Read
        </button>
        <button className="filemaker-button" onClick={updateRecord}>
          Update
        </button>
      </div>
    </div>
  );
}

export default RecordQuery;