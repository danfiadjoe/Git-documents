import React, { useState } from 'react';
import HotelList from '../components/HotelList';
import HotelDetails from '../components/HotelDetails';

function Home() {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [filters, setFilters] = useState({
    location: '',
    price: '',
    rating: ''
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Hotel Booking System
      </h1>

      {/* Search & Filter Bar */}
      {!selectedHotel && (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="location"
            placeholder="Search by location"
            value={filters.location}
            onChange={handleChange}
            className="border rounded px-4 py-2 flex-1"
          />
          <input
            type="number"
            name="price"
            placeholder="Max price"
            value={filters.price}
            onChange={handleChange}
            className="border rounded px-4 py-2 flex-1"
          />
          <select
            name="rating"
            value={filters.rating}
            onChange={handleChange}
            className="border rounded px-4 py-2 flex-1"
          >
            <option value="">Min rating</option>
            <option value="3">⭐ 3+</option>
            <option value="4">⭐ 4+</option>
            <option value="5">⭐ 5</option>
          </select>
        </div>
      )}

      {/* Hotel List or Details */}
      {!selectedHotel ? (
        <HotelList onSelectHotel={setSelectedHotel} filters={filters} />
      ) : (
        <div>
          <HotelDetails hotelId={selectedHotel} />
          <button
            onClick={() => setSelectedHotel(null)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Back to Hotels
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
