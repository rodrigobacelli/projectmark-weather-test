import { api } from '../libs/api';
import { CityType } from '../constants/cities';
import { Weather } from '../types/weather';

export const getWeather = async ({ name, state, country }: CityType) => {
  try {
    let q = `${name},${country}`;
    if (country === 'US') {
      q = `${name},${state},${country}`;
    }

    const response = await api<Weather>(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        method: 'GET',
        params: {
          q,
          units: 'metric',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
