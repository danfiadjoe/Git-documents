import React, { useState } from 'react';
import HotelList from '../components/HotelList';
import HotelDetails from '../components/HotelDetails';

function Home() {
  const [selectedHotel, setSelectedHotel] = useState(null);

  return (
    <div>
      <h1>Hotel Booking System</h1>
      {!selectedHotel ? (
        <HotelList onSelectHotel={setSelectedHotel} />
      ) : (
        <HotelDetails hotelId={selectedHotel} />
      )}
    </div>
  );
}

export default Home;
