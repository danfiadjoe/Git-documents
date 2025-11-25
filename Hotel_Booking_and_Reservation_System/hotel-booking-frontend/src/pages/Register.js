import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/auth/register', { name, email, password })
      .then(res => alert('Registration successful!'))
      .catch(err => alert('Registration failed'));
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
