import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Default to light mode for now - we'll make it smarter later
    return 'light';
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
  const root = document.documentElement;

  let activeTheme = 'light';
  try {
    const savedTheme = localStorage.getItem('dashboard-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      activeTheme = savedTheme;
    } else {
      activeTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
  } catch {
    activeTheme = 'light';
  }

  setTheme(activeTheme);
  root.classList.toggle('dark', activeTheme === 'dark');
  setMounted(true);
}, []);


  useEffect(() => {
    if (!mounted) return;

    try {
      // Save theme preference
      window.localStorage?.setItem('dashboard-theme', theme);
      
      // Apply theme to document
      const root = document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    } catch (error) {
      console.warn('Unable to save theme preference:', error);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const value = {
    theme,
    setTheme,
    toggleTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
    mounted
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};