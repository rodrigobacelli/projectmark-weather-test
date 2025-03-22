import { vi } from 'vitest';
import { mockedWeather } from './mockedWeather.ts';

vi.mock('@tanstack/react-query', () => ({
  useQueries: vi.fn().mockReturnValue({
    data: [mockedWeather, mockedWeather, mockedWeather],
    isLoading: false,
    isFetching: false,
    dataUpdatedAt: 1740798000,
    refetch: vi.fn(),
  }),
}));
