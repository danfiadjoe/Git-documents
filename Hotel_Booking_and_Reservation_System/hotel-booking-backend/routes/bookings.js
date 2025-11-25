const express = require('express');
const router = express.Router();
const db = require('../db');

// Create a booking
router.post('/', (req, res) => {
  const { user_id, room_id, check_in, check_out } = req.body;
  db.query(
    'INSERT INTO bookings (user_id, room_id, check_in, check_out, status) VALUES (?, ?, ?, ?, ?)',
    [user_id, room_id, check_in, check_out, 'confirmed'],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ booking_id: result.insertId });
    }
  );
});

// Get bookings for a user
router.get('/:userId', (req, res) => {
  const userId = req.params.userId;
  db.query('SELECT * FROM bookings WHERE user_id = ?', [userId], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

module.exports = router;
