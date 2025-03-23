import { useQueries } from '@tanstack/react-query';

import { Cities } from '../../constants/cities';
import { getWeather } from '../../services/getWeather.ts';

export const useGetCitiesWeather = () => {
  return useQueries({
    queries: Cities.map((city) => {
      return {
        queryKey: ['city weather', city.name, city.state, city.country],
        queryFn: () => getWeather(city),
        refetchInterval: 10 * 60 * 1000,
      };
    }),
    combine: (results) => {
      return {
        data: results.map((result) => result.data).filter(Boolean),
        isFetching: results.some((result) => result.isFetching),
        isLoading: results.some((result) => result.isLoading),
        dataUpdatedAt: results.reduce(
          (prevValue, currentValue) =>
            prevValue >= currentValue.dataUpdatedAt
              ? prevValue
              : currentValue.dataUpdatedAt,
          0
        ),
        refetch: () => {
          results.forEach((result) => {
            result.refetch();
          });
        },
      };
    },
  });
};
