import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosInstance'; // use your global axios instance

function HotelList({ onSelectHotel }) {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios.get('/hotels')
      .then(res => setHotels(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Available Hotels</h2>
      <ul>
        {hotels.map(hotel => (
          <li key={hotel.id}>
            <button onClick={() => onSelectHotel(hotel.id)}>
              {hotel.name} – {hotel.location}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HotelList;
