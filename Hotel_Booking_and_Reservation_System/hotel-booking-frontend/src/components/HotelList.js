import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HotelList() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/hotels')
      .then(res => setHotels(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Available Hotels</h2>
      <ul>
        {hotels.map(hotel => (
          <li key={hotel.id}>{hotel.name} - {hotel.location}</li>
        ))}
      </ul>
    </div>
  );
}

export default HotelList;
