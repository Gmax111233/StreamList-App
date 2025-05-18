import React, { useState } from 'react';

function StreamList() {
  const [item, setItem] = useState('');
  const [streamingList, setStreamingList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item) {
      setStreamingList([...streamingList, item]);
      setItem('');
    }
  };

  return (
    <div>
      <h1>StreamList</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Enter movie or program"
        />
        <button type="submit">Add to List</button>
      </form>
      <ul>
        {streamingList.map((stream, index) => (
          <li key={index}>{stream}</li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;
