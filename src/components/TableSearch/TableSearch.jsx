// TableSearch.jsx
import React from 'react';
import axios from 'axios';

function TableSearch({ tableName, setTableName, setData }) {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
  };

  const fetchTable = async () => {
    try {
      const response = await axios.get(
        `https://YOUR_FILEMAKER_SERVER_URL/fmi/data/vLatest/databases/YOUR_DATABASE/layouts/${tableName}/records`,
        { headers }
      );
      setData(response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className="table-search-section">
      <input
        className="filemaker-input"
        type="text"
        placeholder="Table Name"
        value={tableName}
        onChange={(e) => setTableName(e.target.value)}
      />
      <button className="filemaker-button" onClick={fetchTable}>
        Submit
      </button>
    </div>
  );
}

export default TableSearch;
