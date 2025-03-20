import axios from 'axios';

const appId = import.meta.env.VITE_OPEN_WEATHER_APP_KEY;

export const api = axios.create();

api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params['appid'] = appId;

  return config;
});
