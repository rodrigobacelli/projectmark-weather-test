import React, { createContext, useContext, useState } from 'react';

export type Themes = 'dark' | 'light';

type ToastContextType = {
  theme?: Themes;
  onThemeChange?: (nextTheme?: Themes) => void;
};

const ThemeContext = createContext<ToastContextType>({
  theme: undefined,
  onThemeChange: () => {},
});

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Themes | undefined>();

  const handleThemeChange = (theme?: Themes) => {
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, onThemeChange: handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { theme, onThemeChange } = useContext(ThemeContext);

  return {
    theme,
    onThemeChange,
  };
};
