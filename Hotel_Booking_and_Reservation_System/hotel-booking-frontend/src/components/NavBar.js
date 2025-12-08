import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/login');
  };

  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '10px 20px', 
      backgroundColor: '#333', 
      color: '#fff' 
    }}>
      <h2>Hotel Booking</h2>
      <div style={{ display: 'flex', gap: '15px' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        <Link to="/dashboard" style={{ color: '#fff', textDecoration: 'none' }}>Dashboard</Link>
        {!token ? (
          <>
            <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>
            <Link to="/register" style={{ color: '#fff', textDecoration: 'none' }}>Register</Link>
          </>
        ) : (
          <button 
            onClick={handleLogout} 
            style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
