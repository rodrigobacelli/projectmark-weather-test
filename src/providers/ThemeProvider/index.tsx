import React, { useState } from 'react';

import { ThemeContext, Themes } from '../../contexts/ThemeContext';

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Themes | undefined>(
    localStorage.theme ||
      (!localStorage.theme &&
        window.matchMedia('(prefers-color-scheme: dark)').matches &&
        'dark') ||
      undefined
  );

  const handleThemeChange = (theme?: Themes) => {
    if (theme === 'dark') {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.removeItem('theme');
      document.documentElement.classList.remove('light');

      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, onThemeChange: handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};
