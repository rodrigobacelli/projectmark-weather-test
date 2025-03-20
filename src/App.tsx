import * as React from 'react';

import { format } from 'date-fns/format';

import { useGetCitiesWeather } from './hooks/services/useGetCitiesWeather';

export const App = () => {
  const queries = useGetCitiesWeather();

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
      <h2>
        Last updated at:{' '}
        <span suppressHydrationWarning>
          {format(new Date(queries.dataUpdatedAt), 'MM/dd/yyyy')}
        </span>
      </h2>
      <br />
      <br />
      <br />
      <button onClick={() => queries.refetch()}>Refetch</button>
      <br />
      <br />
      <br />
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
                <p>Pressure: {item.main.pressure} hPa</p>
              </li>
              <hr />
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};
