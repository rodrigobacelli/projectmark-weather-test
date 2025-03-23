import { describe, it, expect, beforeEach, afterEach, afterAll } from 'vitest';
import { QueryClientProvider } from '@tanstack/react-query';

import { renderHook, queryClient, waitFor } from '../../tests/test-utils';
import { mockedWeather } from '../../tests/mocks/mockedWeather.ts';

import { useGetCitiesWeather } from './useGetCitiesWeather';
import { server } from '../../tests/msw.ts';

const wrapper = ({ children }: { children?: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

beforeEach(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe('hooks/useTheme', () => {
  it('should return data for the 3 cities', async () => {
    const { result } = renderHook(() => useGetCitiesWeather(), { wrapper });
    expect(result.current.isFetching).toBeTruthy();

    await waitFor(() => {
      expect(result.current.isFetching).toBeFalsy();
      expect(result.current.data).toEqual([
        mockedWeather,
        mockedWeather,
        mockedWeather,
      ]);
    });
  });
});
