import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TableList.css';

function TableList() {
  const [tables, setTables] = useState([]);
  
  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await axios.get(
          'https://YOUR_FILEMAKER_SERVER_URL/fmi/data/vLatest/databases/YOUR_DATABASE/layouts',
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
            },
          }
        );
        setTables(response.data.tableNames);
      } catch (error) {
        console.error('There was an error fetching the tables!', error);
      }
    };

    fetchTables();
  }, []);
  
  return (
    <div className="table-list">
      <h3>Tables:</h3>
      <ul>
        {tables.map((table, index) => (
          <li key={index}>{table}</li>
        ))}
      </ul>
    </div>
  );
}

export default TableList;
