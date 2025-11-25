const express = require('express');
const router = express.Router();
const db = require('../db');

// Get rooms for a specific hotel
router.get('/:hotelId', (req, res) => {
  const hotelId = req.params.hotelId;
  db.query('SELECT * FROM rooms WHERE hotel_id = ?', [hotelId], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Add a new room (Admin use)
router.post('/', (req, res) => {
  const { hotel_id, room_type, price } = req.body;
  db.query('INSERT INTO rooms (hotel_id, room_type, price) VALUES (?, ?, ?)', 
    [hotel_id, room_type, price], 
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ room_id: result.insertId });
    });
});

module.exports = router;
