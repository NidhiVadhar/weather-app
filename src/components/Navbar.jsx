import { useTheme } from '../context/themeContext';

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: darkMode ? '#1f1f1f' : '#1e90ff',
      color: 'white'
    }}>
      <span>🌤️ Weather Now</span>
      <button
        onClick={toggleTheme}
        style={{
          background: 'transparent',
          border: '1px solid white',
          color: 'white',
          padding: '5px 12px',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;
