import * as React from 'react';

import { useGetCitiesWeather } from './hooks/services/useGetCitiesWeather';

export const App = () => {
  const queries = useGetCitiesWeather();

  console.log(queries);

  if (queries.isLoading) {
    return <div>Loading...</div>;
  }

  if (queries.isFetching) {
    return <div>Fetching...</div>;
  }

  if (!Array.isArray(queries.data) || queries.data.length === 0) {
    return <div>No content</div>;
  }

  return (
    <>
      <h1>Weather App</h1>

      <ul>
        {queries.data.map((item) => {
          if (!item) {
            return null;
          }

          return (
            <React.Fragment key={item.id}>
              <li>
                <p>Temprature: {Math.round(item.main.temp)}&#176;</p>
                <p>Humidity: {item.main.humidity}%</p>
                <p>Pressure: {item.main.pressure}hPa</p>
              </li>
              <hr />
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};
