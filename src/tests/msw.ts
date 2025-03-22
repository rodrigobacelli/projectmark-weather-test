import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { mockedWeather } from './mocks/mockedWeather.ts';

const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get('https://api.openweathermap.org/data/2.5/weather', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(mockedWeather);
  }),
];

export const server = setupServer(...handlers);
