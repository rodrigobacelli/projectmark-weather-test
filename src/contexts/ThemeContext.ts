import { createContext } from 'react';

export type Themes = 'dark' | 'light';

type ThemeContextType = {
  theme?: Themes;
  onThemeChange?: (nextTheme?: Themes) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
