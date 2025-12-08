import React, { useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/auth/login', { email, password });
      const token = res.data.token;

      // Save token
      localStorage.setItem('token', token);

      // Decode token to get user info
      const decoded = jwtDecode(token);
      localStorage.setItem('userId', decoded.id);

      alert('Login successful!');
      window.location.href = '/dashboard'; // redirect
    } catch (err) {
      alert('Login failed: ' + err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
