import { Weather } from './pages/Weather';

export const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-white dark:bg-gray-900">
      <h1>Weather App</h1>
      <Weather />
    </div>
  );
};
