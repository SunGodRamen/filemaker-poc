// FileMakerClient.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './FileMakerClient.css';

function FileMakerClient() {
  const [data, setData] = useState(null);
  const [recordId, setRecordId] = useState('');
  const [fieldData, setFieldData] = useState({ fieldName1: '', fieldName2: '' });

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
  };

  const fetchRecord = async () => {
    try {
      const response = await axios.get(
        `https://YOUR_FILEMAKER_SERVER_URL/fmi/data/vLatest/databases/YOUR_DATABASE/layouts/YOUR_LAYOUT/records/${recordId}`,
        { headers }
      );
      setData(response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  const createRecord = async () => {
    try {
      const response = await axios.post(
        'https://YOUR_FILEMAKER_SERVER_URL/fmi/data/vLatest/databases/YOUR_DATABASE/layouts/YOUR_LAYOUT/records',
        { fieldData },
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
        `https://YOUR_FILEMAKER_SERVER_URL/fmi/data/vLatest/databases/YOUR_DATABASE/layouts/YOUR_LAYOUT/records/${recordId}`,
        { fieldData },
        { headers }
      );
      setData(response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  const deleteRecord = async () => {
    try {
      const response = await axios.delete(
        `https://YOUR_FILEMAKER_SERVER_URL/fmi/data/vLatest/databases/YOUR_DATABASE/layouts/YOUR_LAYOUT/records/${recordId}`,
        { headers }
      );
      setData(response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className="filemaker-container">
      <input
        className="filemaker-input"
        type="text"
        placeholder="Record ID"
        value={recordId}
        onChange={(e) => setRecordId(e.target.value)}
      />
      <input
        className="filemaker-input"
        type="text"
        placeholder="Field Name 1"
        value={fieldData.fieldName1}
        onChange={(e) => setFieldData({ ...fieldData, fieldName1: e.target.value })}
      />
      <input
        className="filemaker-input"
        type="text"
        placeholder="Field Name 2"
        value={fieldData.fieldName2}
        onChange={(e) => setFieldData({ ...fieldData, fieldName2: e.target.value })}
      />

      <button className="filemaker-button" onClick={fetchRecord}>
        Read Record
      </button>
      <button className="filemaker-button" onClick={createRecord}>
        Create Record
      </button>
      <button className="filemaker-button" onClick={updateRecord}>
        Update Record
      </button>
      <button className="filemaker-button" onClick={deleteRecord}>
        Delete Record
      </button>

      <pre className="data-display">{data && JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default FileMakerClient;