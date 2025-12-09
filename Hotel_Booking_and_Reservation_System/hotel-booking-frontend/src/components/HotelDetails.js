import React, { useEffect, useState } from "react";
import axios from "../utils/axiosInstance";

function HotelDetails({ hotelId }) {
  const [hotel, setHotel] = useState(null);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get(`/hotels/${hotelId}`).then(res => setHotel(res.data));
    axios.get(`/rooms/${hotelId}`).then(res => setRooms(res.data));
  }, [hotelId]);

  if (!hotel) return <p>Loading hotel details...</p>;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      {/* Hotel Info */}
      <h2 className="text-2xl font-bold text-blue-600 mb-2">{hotel.name}</h2>
      <p className="text-gray-600 mb-2">{hotel.location}</p>
      <p className="text-yellow-500 mb-4">⭐ {hotel.rating}</p>

      {/* Rooms */}
      <h3 className="text-xl font-semibold mb-4">Available Rooms</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rooms.map(room => (
          <div
            key={room.id}
            className="border rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <h4 className="text-lg font-semibold mb-2">Room {room.id}</h4>
            <p className="text-gray-600">Type: {room.type}</p>
            <p className="text-gray-600">Price: ${room.price}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => alert(`Booking room ${room.id}...`)}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelDetails;
