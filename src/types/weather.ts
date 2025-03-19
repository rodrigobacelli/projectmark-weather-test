export type WeatherStatus = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type WeatherData = {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: WeatherStatus[];
};

export type WeatherAlert = {
  sender_name: string;
  event: string;
  start: number;
  end: number;
  description: string;
  tags: string[];
};

export type Weather = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: WeatherData;
  minutely: WeatherData[];
  hourly: WeatherData[];
  daily: WeatherData[];
  alerts: WeatherAlert[];
};
