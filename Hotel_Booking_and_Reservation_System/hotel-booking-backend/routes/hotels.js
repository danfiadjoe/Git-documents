const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all hotels
router.get('/', (req, res) => {
  db.query('SELECT * FROM hotels', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Add a new hotel (Admin use)
router.post('/', (req, res) => {
  const { name, location } = req.body;
  db.query('INSERT INTO hotels (name, location) VALUES (?, ?)', [name, location], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ hotel_id: result.insertId });
  });
});

module.exports = router;
