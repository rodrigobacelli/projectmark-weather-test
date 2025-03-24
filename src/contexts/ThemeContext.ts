import * as React from 'react';

export type Themes = 'dark' | 'light';

type ThemeContextType = {
  theme?: Themes;
  onThemeChange?: (nextTheme?: Themes) => void;
};

export const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);
