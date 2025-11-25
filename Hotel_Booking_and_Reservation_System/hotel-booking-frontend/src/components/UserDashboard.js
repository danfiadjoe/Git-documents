import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserDashboard({ userId }) {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/bookings/${userId}`)
      .then(res => setBookings(res.data))
      .catch(err => console.error('Error fetching bookings:', err));
  }, [userId]);

  return (
    <div>
      <h2>Your Bookings</h2>
      <ul>
        {bookings.map(b => (
          <li key={b.id}>
            Room {b.room_id} from {b.check_in} to {b.check_out} - {b.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserDashboard;
