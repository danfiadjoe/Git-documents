import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HotelDetails({ hotelId }) {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/rooms/${hotelId}`)
      .then(res => setRooms(res.data))
      .catch(err => console.error('Error fetching rooms:', err));
  }, [hotelId]);

  return (
    <div>
      <h3>Rooms</h3>
      <ul>
        {rooms.map(room => (
          <li key={room.id}>
            {room.room_type} - ${room.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HotelDetails;
