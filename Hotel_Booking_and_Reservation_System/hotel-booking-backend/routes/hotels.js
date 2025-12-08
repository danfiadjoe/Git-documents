const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const authorizeRole = require('../middleware/authorizeRole');
const db = require('../db');

// Public: view hotels
router.get('/', (req, res) => {
  db.query('SELECT * FROM hotels', (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    res.json(results);
  });
});

// Admin only: add hotel
router.post('/', verifyToken, authorizeRole('admin'), (req, res) => {
  const { name, location, rating } = req.body;
  db.query('INSERT INTO hotels (name, location, rating) VALUES (?, ?, ?)',
    [name, location, rating],
    (err, result) => {
      if (err) return res.status(500).json({ message: 'Database error' });
      res.json({ message: 'Hotel added successfully', id: result.insertId });
    }
  );
});

module.exports = router;
