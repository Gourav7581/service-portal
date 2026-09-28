import React, { useState, useEffect } from 'react';
import api from './config/api';

const Signdt = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/user');
        if (response.data.code === 200) {
          setUsers(response.data.data); // Set users in state
        } else {
          setError(response.data.message);
        }
      } catch (err) {
        setError('Error fetching data. Please try again later.');
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table border="1">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Signdt;
