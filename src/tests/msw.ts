import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { mockedWeather } from './mocks/mockedWeather.ts';

const handlers = [
  http.get('https://api.openweathermap.org/data/2.5/weather', () => {
    return HttpResponse.json(mockedWeather);
  }),
  http.get('https://api.openweathermap.org/data/2.5/weather', () => {
    return HttpResponse.json(null, { status: 204 });
  }),
];

export const server = setupServer(...handlers);
