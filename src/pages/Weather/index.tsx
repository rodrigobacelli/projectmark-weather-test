import { useGetCitiesWeather } from '../../hooks/services/useGetCitiesWeather';
import { Container } from '../../components/Container';
import { WeatherCard } from '../../components/WeatherCard';
import { DataUpdater } from '../../components/DataUpdater';
import { Loader } from '../../components/Loader';
import { NoResults } from '../../components/NoResults';
import { Text } from '../../components/Text';

export const Weather = () => {
  const queries = useGetCitiesWeather();

  if (queries.isLoading) {
    return <Loader size={100} />;
  }

  if (!Array.isArray(queries.data) || queries.data.length === 0) {
    return <NoResults />;
  }

  return (
    <div
      className="flex flex-col items-center w-full"
      id="weather-page"
      data-testid="weather-page"
    >
      <Container as="section" className="flex flex-col gap-4">
        <Text as="h1" className="text-xl font-bold">
          Weather now
        </Text>
        <DataUpdater
          lastUpdated={new Date(queries.dataUpdatedAt)}
          onUpdate={queries.refetch}
          isUpdating={queries.isFetching}
        />
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {queries.data
            .filter((item) => !!item)
            .map((item) => (
              <WeatherCard weather={item} key={item.id} />
            ))}
        </div>
      </Container>
    </div>
  );
};
