const express = require('express');
const router = express.Router();
const db = require('../db');

// Add a review
router.post('/', (req, res) => {
  const { user_id, hotel_id, rating, comment } = req.body;
  db.query(
    'INSERT INTO reviews (user_id, hotel_id, rating, comment) VALUES (?, ?, ?, ?)',
    [user_id, hotel_id, rating, comment],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ review_id: result.insertId });
    }
  );
});

// Get reviews for a hotel
router.get('/:hotelId', (req, res) => {
  const hotelId = req.params.hotelId;
  db.query('SELECT * FROM reviews WHERE hotel_id = ?', [hotelId], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

module.exports = router;
