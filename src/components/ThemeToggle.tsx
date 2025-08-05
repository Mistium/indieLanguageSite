// src/components/ThemeToggle.tsx
import React from 'react';
import { useTheme } from '../ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'default' ? 'hacker' : 'default');
  };

  return (
    <button onClick={toggleTheme} style={{
      background: theme === 'hacker' ? '#00ff88' : '#0ea5e9',
      color: theme === 'hacker' ? '#000' : '#fff',
      padding: '0.5rem 1rem',
      borderRadius: '6px',
      border: 'none',
      fontWeight: 'bold',
      cursor: 'pointer',
      marginLeft: '1rem'
    }}>
      Theme: {theme === 'default' ? '🌤️ Default' : '💻 Hacker'}
    </button>
  );
};

export default ThemeToggle;
