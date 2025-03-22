import { describe, it, expect, beforeEach, afterEach, afterAll } from 'vitest';
import { server } from '../tests/msw';
import { getWeather } from './getWeather';
import { mockedWeather } from '../tests/mocks/mockedWeather';

beforeEach(async () => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe('services/getWeather', () => {
  it('should fetch the city data', async () => {
    const response = await getWeather({
      name: 'City',
      state: 'State',
      country: 'Country',
    });

    expect(response).toEqual(mockedWeather);
  });
});
