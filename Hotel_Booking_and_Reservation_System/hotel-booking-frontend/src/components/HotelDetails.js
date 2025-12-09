import React, { useEffect, useState } from "react";
import axios from "../utils/axiosInstance";

function HotelDetails({ hotelId }) {
  const [hotel, setHotel] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  useEffect(() => {
    axios.get(`/hotels/${hotelId}`).then(res => setHotel(res.data));
    axios.get(`/rooms/${hotelId}`).then(res => setRooms(res.data));
  }, [hotelId]);

  const handleBooking = async (roomId) => {
    try {
      const userId = localStorage.getItem("userId"); // stored at login
      if (!userId) {
        alert("You must be logged in to book a room.");
        return;
      }

      if (!checkIn || !checkOut) {
        alert("Please select check-in and check-out dates.");
        return;
      }

      const res = await axios.post("/bookings", {
        user_id: userId,
        room_id: roomId,
        check_in: checkIn,
        check_out: checkOut,
      });

      alert(res.data.message || "Booking successful!");
    } catch (err) {
      console.error(err);
      alert("Booking failed. Please try again.");
    }
  };

  if (!hotel) return <p>Loading hotel details...</p>;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      {/* Hotel Info */}
      <h2 className="text-2xl font-bold text-blue-600 mb-2">{hotel.name}</h2>
      <p className="text-gray-600 mb-2">{hotel.location}</p>
      <p className="text-yellow-500 mb-4">⭐ {hotel.rating}</p>

      {/* Date Pickers */}
      <div className="flex gap-4 mb-6">
        <div>
          <label className="block text-gray-700 mb-1">Check-In</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Check-Out</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="border rounded px-3 py-2"
          />
        </div>
      </div>

      {/* Rooms */}
      <h3 className="text-xl font-semibold mb-4">Available Rooms</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rooms.map(room => (
          <div
            key={room.id}
            className="border rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <h4 className="text-lg font-semibold mb-2">Room {room.id}</h4>
            <p className="text-gray-600">Type: {room.room_type || room.type}</p>
            <p className="text-gray-600">Price: ${room.price}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => handleBooking(room.id)}
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
