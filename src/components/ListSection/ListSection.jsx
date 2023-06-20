// ListSection.jsx
import React from 'react';
import './ListSection.css';

function ListSection({ data }) {
  return (
    <div className="list-section">
      <pre className="data-display">
        {data && JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export default ListSection;
