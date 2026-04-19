'use client';

import { useState } from 'react';

const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  }
  return true;
};

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(getInitialTheme);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-yellow-400 hover:text-yellow-300 dark:text-yellow-400 dark:hover:text-yellow-300 light:text-blue-600 light:hover:text-blue-500 transition p-2 rounded border border-yellow-400 hover:border-yellow-300 dark:border-yellow-400 dark:hover:border-yellow-300 light:border-blue-400 light:hover:border-blue-300"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}