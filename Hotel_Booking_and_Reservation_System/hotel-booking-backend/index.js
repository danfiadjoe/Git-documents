require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err.stack);
    return;
  }
  console.log('✅ Connected to MySQL database');
});

// Import routes
const authRoutes = require('./routes/auth');
const hotelRoutes = require('./routes/hotels');
const roomRoutes = require('./routes/rooms');
const bookingRoutes = require('./routes/bookings');
const reviewRoutes = require('./routes/reviews');

// Use routes
app.use('/auth', authRoutes);
app.use('/hotels', hotelRoutes);
app.use('/rooms', roomRoutes);
app.use('/bookings', bookingRoutes);
app.use('/reviews', reviewRoutes);

// Start server
app.listen(3001, () => {
  console.log('✅ Server running on port 3001');
});
