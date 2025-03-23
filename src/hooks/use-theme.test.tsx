import { describe, it, expect } from 'vitest';

import { act, renderHook } from '../tests/test-utils';
import { ThemeProvider } from '../providers/ThemeProvider';

import { useTheme } from './useTheme.tsx';

const wrapper = ({ children }: { children?: React.ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

describe('hooks/useTheme', () => {
  it('should return handle changing theme', async () => {
    const { result } = renderHook(() => useTheme(), { wrapper });
    expect(result.current.theme).toBeUndefined();

    act(() => {
      result.current.onThemeChange?.('dark');
    });

    expect(result.current.theme).toEqual('dark');

    act(() => {
      result.current.onThemeChange?.('light');
    });

    expect(result.current.theme).toEqual('light');

    act(() => {
      result.current.onThemeChange?.(undefined);
    });

    expect(result.current.theme).toBeUndefined();
  });

  it('should throw an error when used outside ThemeProvider', () => {
    expect(() => renderHook(() => useTheme())).toThrow(
      'useTheme must be used within a ThemeProvider'
    );
  });
});
