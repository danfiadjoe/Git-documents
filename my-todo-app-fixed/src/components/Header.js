import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Header() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <header className="flex justify-between items-center p-4 border-b">
      <h1 className="text-2xl font-bold">📝 My To-Do List</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
      >
        {darkMode ? '🌙 Dark' : '☀️ Light'}
      </button>
    </header>
  );
}

export default Header;
