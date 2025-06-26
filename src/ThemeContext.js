import React, { useState, useEffect } from 'react';

const ThemeContext = React.createContext({ dark: false, toggle: () => {} });

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('dark') === 'true';
    }
    return false;
  });

  useEffect(() => {
    const className = 'dark-mode';
    if (dark) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }
    window.localStorage.setItem('dark', dark);
  }, [dark]);

  const toggle = () => setDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
