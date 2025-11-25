import React, { useState } from 'react';
import axios from 'axios';

function BookingForm({ userId, roomId }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/bookings', {
      user_id: userId,
      room_id: roomId,
      check_in: checkIn,
      check_out: checkOut
    })
    .then(res => alert('Booking confirmed!'))
    .catch(err => console.error('Booking error:', err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Check-in: <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} /></label>
      <label>Check-out: <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} /></label>
      <button type="submit">Book Now</button>
    </form>
  );
}

export default BookingForm;
