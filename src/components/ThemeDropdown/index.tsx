import { FaCircleHalfStroke, FaMoon, FaSun } from 'react-icons/fa6';

import { Themes, useTheme } from '../../providers/ThemeProvider';
import { Dropdown } from '../Dropdown';

export type ThemeDropdownProps = {
  className?: string;
};

export const ThemeDropdown = ({ className }: ThemeDropdownProps) => {
  const { theme, onThemeChange } = useTheme();

  return (
    <Dropdown
      className={className}
      onSelect={(nextOption) =>
        onThemeChange?.(
          ['dark', 'light'].includes(nextOption)
            ? (nextOption as Themes)
            : undefined
        )
      }
      selectedOption={theme || 'system'}
      options={[
        {
          value: 'system',
          label: 'System',
          icon: FaCircleHalfStroke,
        },
        {
          value: 'light',
          label: 'Light',
          icon: FaMoon,
        },
        {
          value: 'dark',
          label: 'Dark',
          icon: FaSun,
        },
      ]}
    />
  );
};
