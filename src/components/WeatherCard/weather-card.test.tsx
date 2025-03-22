import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import { Weather } from '../../types/weather';
import { WeatherCard } from './';

const mockedWeather: Weather = {
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

describe('components/WeatherCard', () => {
  it('should render the city name', () => {
    const result = render(
      <WeatherCard weather={mockedWeather} className="weather-card-className" />
    );

    expect(result.getByText('San Francisco, US')).toBeInTheDocument();
  });

  it('should render the main weather condition', () => {
    const result = render(
      <WeatherCard weather={mockedWeather} className="weather-card-className" />
    );

    expect(result.getByText('Clouds')).toBeInTheDocument();
  });

  it('should render the temperature, humidity and pressure', () => {
    const result = render(
      <WeatherCard weather={mockedWeather} className="weather-card-className" />
    );

    expect(result.getByTestId('weather-card-humidity')).toHaveTextContent(
      '90%'
    );
    expect(result.getByTestId('weather-card-pressure')).toHaveTextContent(
      '1021'
    );
    expect(result.getByTestId('weather-card-temperature')).toHaveTextContent(
      '11'
    );
  });

  describe('temperture color rules', () => {
    it('should render the temperature as blue when 5 deg or less', () => {
      const result = render(
        <WeatherCard
          weather={{
            ...mockedWeather,
            main: {
              ...mockedWeather.main,
              temp: 4,
            },
          }}
          className="weather-card-className"
        />
      );

      expect(
        result
          .getByTestId('weather-card-temperature')
          .classList.contains('text-blue-900')
      ).toBeTruthy();
      expect(
        result
          .getByTestId('weather-card-temperature')
          .classList.contains('text-orange-900')
      ).toBeFalsy();
      expect(
        result
          .getByTestId('weather-card-temperature')
          .classList.contains('text-red-700')
      ).toBeFalsy();
    });

    it('should render the temperature as orange when above 5 deg, up to 25 deg', () => {
      const result = render(
        <WeatherCard
          weather={{
            ...mockedWeather,
            main: {
              ...mockedWeather.main,
              temp: 20,
            },
          }}
          className="weather-card-className"
        />
      );

      expect(
        result
          .getByTestId('weather-card-temperature')
          .classList.contains('text-blue-900')
      ).toBeFalsy();
      expect(
        result
          .getByTestId('weather-card-temperature')
          .classList.contains('text-orange-900')
      ).toBeTruthy();
      expect(
        result
          .getByTestId('weather-card-temperature')
          .classList.contains('text-red-700')
      ).toBeFalsy();
    });

    it('should render the temperature as red when above 25 deg', () => {
      const result = render(
        <WeatherCard
          weather={{
            ...mockedWeather,
            main: {
              ...mockedWeather.main,
              temp: 30,
            },
          }}
          className="weather-card-className"
        />
      );

      expect(
        result
          .getByTestId('weather-card-temperature')
          .classList.contains('text-blue-900')
      ).toBeFalsy();
      expect(
        result
          .getByTestId('weather-card-temperature')
          .classList.contains('text-orange-900')
      ).toBeFalsy();
      expect(
        result
          .getByTestId('weather-card-temperature')
          .classList.contains('text-red-700')
      ).toBeTruthy();
    });
  });

  it('should accept classNames', () => {
    const result = render(
      <WeatherCard weather={mockedWeather} className="weather-card-className" />
    );

    expect(
      result.container.querySelector('.weather-card-className')
    ).toBeInTheDocument();
  });

  it('should render nothing when weather is empty', () => {
    const result = render(<WeatherCard className="weather-card-className" />);

    expect(!!result.queryByTestId('weather-card-temperature')).toBeFalsy();
  });

  it('should render the Weather Card Component', () => {
    const result = render(
      <WeatherCard weather={mockedWeather} className="weather-card-className" />
    );

    expect(result).toMatchSnapshot();
  });
});
