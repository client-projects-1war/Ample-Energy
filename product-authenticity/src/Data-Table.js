import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data using Axios
    axios.get('https://it.1war.company/authenticity.json')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleCopyPassword = (password) => {
    // Use the Clipboard API to copy the password to the clipboard
    navigator.clipboard.writeText(password)
      .then(() => {
        alert('Product Code copied to clipboard!');
      })
      .catch(err => {
        console.error('Error copying password:', err);
      });
  };

  return (
    <div className="container mt-4">
      <h2>Ample Energy ProductCode Data Table</h2>
      <table className="table table-bordered  table-hover table-dark">
        <thead>
          <tr>
          <th scope="col" style={{color:'#d7b56d'}}>Product Name</th>
            <th scope="col" style={{color:'#d7b56d'}}>Product Code</th>
            <th scope="col" style={{color:'#d7b56d'}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) && data.length > 0 ? (
            data.map(user => (
              <tr key={user._id.$oid}>
                <td>{user.UserId}</td>
                <td>
                  <span
                    className="password-text"
                    data-toggle="tooltip"
                    title="Click to copy"
                    onClick={() => handleCopyPassword(user.Password)}
                  >
                    {user.Password}
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleCopyPassword(user.Password)}
                  >
                    Copy
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
