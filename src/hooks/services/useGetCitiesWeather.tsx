import { useQueries } from '@tanstack/react-query';

import { Cities } from '../../constants/cities';
import { getWeather } from '../../services/getWeather.ts';

export const useGetCitiesWeather = () => {
  return useQueries({
    queries: Cities.map((city) => {
      return {
        queryKey: ['city weather', city.name, city.state, city.country],
        queryFn: () => getWeather(city),
      };
    }),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        isFetching: results.some((result) => result.isFetching),
        isLoading: results.some((result) => result.isLoading),
      };
    },
  });
};
