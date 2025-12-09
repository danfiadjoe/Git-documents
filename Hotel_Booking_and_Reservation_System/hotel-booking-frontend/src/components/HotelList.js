import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosInstance';

function HotelList({ onSelectHotel, filters }) {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios.get('/hotels').then(res => {
      let filtered = res.data;

      if (filters.location) {
        filtered = filtered.filter(h =>
          h.location.toLowerCase().includes(filters.location.toLowerCase())
        );
      }
      if (filters.price) {
        filtered = filtered.filter(h => h.price <= parseInt(filters.price));
      }
      if (filters.rating) {
        filtered = filtered.filter(h => h.rating >= parseInt(filters.rating));
      }

      setHotels(filtered);
    });
  }, [filters]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {hotels.map(hotel => (
        <div
          key={hotel.id}
          className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition cursor-pointer"
          onClick={() => onSelectHotel(hotel.id)}
        >
          <h2 className="text-xl font-semibold mb-2">{hotel.name}</h2>
          <p className="text-gray-600">{hotel.location}</p>
          <p className="text-gray-600">Price: ${hotel.price}</p>
          <p className="text-yellow-500">⭐ {hotel.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default HotelList;
