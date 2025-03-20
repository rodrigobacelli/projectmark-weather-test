import { format } from 'date-fns/format';

import { useGetCitiesWeather } from '../../hooks/services/useGetCitiesWeather';
import { Container } from '../../components/Container';
import { WeatherCard } from '../../components/WeatherCard';

export const Weather = () => {
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
    <div className="flex flex-col items-center w-full">
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
      <Container
        as="section"
        className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2"
      >
        {queries.data
          .filter((item) => !!item)
          .map((item) => (
            <WeatherCard weather={item} />
          ))}
      </Container>
    </div>
  );
};
