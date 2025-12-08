import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosInstance';
import BookingForm from './BookingForm';
import ReviewForm from './ReviewForm';

function HotelDetails({ hotelId }) {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    if (!hotelId) return;
    axios.get(`/rooms/${hotelId}`)
      .then(res => setRooms(res.data))
      .catch(err => console.error(err));
  }, [hotelId]);

  return (
    <div style={{ padding: '20px' }}>
      <h3>Rooms</h3>
      <ul>
        {rooms.map(room => (
          <li key={room.id}>
            {room.room_type} – ${room.price}
            <BookingForm roomId={room.id} />
          </li>
        ))}
      </ul>
      <ReviewForm hotelId={hotelId} />
    </div>
  );
}

export default HotelDetails;
