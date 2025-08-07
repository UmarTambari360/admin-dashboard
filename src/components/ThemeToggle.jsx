import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import Button from './Button';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme, mounted } = useTheme();

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className={`w-10 h-10 ${className}`}>
        <div className="w-5 h-5" /> {/* Placeholder to maintain layout */}
      </Button>
    );
  }

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleTheme}
      className={`w-10 h-10 ${className}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon size={20} className="text-gray-600 transition-colors hover:text-gray-900" />
      ) : (
        <Sun size={20} className="text-yellow-500 transition-colors hover:text-yellow-400" />
      )}
    </Button>
  );
};

export default ThemeToggle;