export type WeatherStatus = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type Weather = {
  id: 3459712;
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
