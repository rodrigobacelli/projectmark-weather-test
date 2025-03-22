import { Weather } from '../../types/weather.ts';

export const mockedWeather: Weather = {
  coord: {
    lon: -122.4194,
    lat: 37.7749,
  },
  weather: [
    {
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d',
    },
  ],
  base: 'stations',
  main: {
    temp: 10.82,
    feels_like: 10.31,
    temp_min: 10.82,
    temp_max: 10.82,
    pressure: 1021,
    humidity: 90,
    sea_level: 1021,
    grnd_level: 1017,
  },
  visibility: 10000,
  wind: {
    speed: 3.13,
    deg: 302,
    gust: 4.92,
  },
  clouds: {
    all: 100,
  },
  dt: 1742656825,
  sys: {
    type: 2,
    id: 2003880,
    country: 'US',
    sunrise: 1742652576,
    sunset: 1742696591,
  },
  timezone: -25200,
  id: 5391959,
  name: 'San Francisco',
  cod: 200,
};
