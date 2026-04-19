'use client';

import { useState, useEffect } from 'react';

type Theme = 'dark' | 'light' | 'neon' | 'cyber' | 'fire';

const themes: Theme[] = ['dark', 'light', 'neon', 'cyber', 'fire'];

const themeConfig = {
  dark: {
    primary: 'red',
    secondary: 'yellow',
    background: 'black',
    accent: 'red',
    emoji: '🌙',
    title: 'Dark Mode'
  },
  light: {
    primary: 'blue',
    secondary: 'blue',
    background: 'white',
    accent: 'blue',
    emoji: '☀️',
    title: 'Light Mode'
  },
  neon: {
    primary: 'purple',
    secondary: 'pink',
    background: 'black',
    accent: 'purple',
    emoji: '💜',
    title: 'Neon Dreams'
  },
  cyber: {
    primary: 'green',
    secondary: 'cyan',
    background: 'black',
    accent: 'green',
    emoji: '🤖',
    title: 'Cyber Punk'
  },
  fire: {
    primary: 'orange',
    secondary: 'red',
    background: 'black',
    accent: 'orange',
    emoji: '🔥',
    title: 'Fire Storm'
  }
};

const getInitialTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme') as Theme;
    return savedTheme && themes.includes(savedTheme) ? savedTheme : 'dark';
  }
  return 'dark';
};

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    // Remove all theme classes
    themes.forEach(theme => {
      document.documentElement.classList.remove(theme);
    });
    // Add current theme class
    document.documentElement.classList.add(currentTheme);
  }, [currentTheme]);

  const cycleTheme = () => {
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    setCurrentTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  const theme = themeConfig[currentTheme];

  return (
    <button
      onClick={cycleTheme}
      className={`text-${theme.secondary}-400 hover:text-${theme.secondary}-300 transition p-2 rounded border border-${theme.secondary}-400 hover:border-${theme.secondary}-300`}
      title={`Switch to ${themeConfig[themes[(themes.indexOf(currentTheme) + 1) % themes.length]].title}`}
    >
      {theme.emoji}
    </button>
  );
}