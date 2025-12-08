import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserDashboard() {
  const [bookings, setBookings] = useState([]);
  const userId = localStorage.getItem('userId'); // get from decoded token

  useEffect(() => {
    if (!userId) return;

    axios.get(`http://localhost:3001/bookings/${userId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(res => setBookings(res.data))
    .catch(err => console.error('Error fetching bookings:', err));
  }, [userId]);

  const formatDate = (dateString) => new Date(dateString).toLocaleDateString();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th>Room</th>
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(b => (
              <tr key={b.id}>
                <td>{b.room_id}</td>
                <td>{formatDate(b.check_in)}</td>
                <td>{formatDate(b.check_out)}</td>
                <td>{b.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button 
        onClick={() => {
          localStorage.removeItem('token');
          localStorage.removeItem('userId');
          window.location.href = '/login';
        }}
        style={{ marginTop: '20px', padding: '10px 20px' }}
      >
        Logout
      </button>
    </div>
  );
}

export default UserDashboard;
