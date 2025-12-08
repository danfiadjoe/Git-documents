import React, { useState } from 'react';
import axios from '../utils/axiosInstance';

function BookingForm({ roomId }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const userId = localStorage.getItem('userId');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/bookings', {
        user_id: userId,
        room_id: roomId,
        check_in: checkIn,
        check_out: checkOut
      });
      alert('Booking confirmed!');
    } catch (err) {
      alert('Booking failed: ' + err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '10px' }}>
      <label>Check-in: <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} /></label>
      <label>Check-out: <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} /></label>
      <button type="submit">Book</button>
    </form>
  );
}

export default BookingForm;
