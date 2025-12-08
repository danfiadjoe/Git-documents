const jwt = require('jsonwebtoken');

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err || results.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = results[0];
    // TODO: check password properly with bcrypt

    const token = jwt.sign(
      { id: user.id, role: user.role }, // include role
      process.env.JWT_SECRET || 'secret_key',
      { expiresIn: '1h' }
    );

    res.json({ token });
  });
});
