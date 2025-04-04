export type WeatherMainConditions =
  | 'Thunderstorm'
  | 'Drizzle'
  | 'Snow'
  | 'Mist'
  | 'Smoke'
  | 'Haze'
  | 'Dust'
  | 'Fog'
  | 'Sand'
  | 'Ash'
  | 'Squall'
  | 'Tornado'
  | 'Clear'
  | 'Clouds'
  | 'Rain';

export type WeatherStatus = {
  id: number;
  main: WeatherMainConditions;
  description: string;
  icon: string;
};

export type Weather = {
  id: number;
  coord: {
    lon: number;
    lat: number;
  };
  weather: WeatherStatus[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  name: string;
  cod: number;
};
