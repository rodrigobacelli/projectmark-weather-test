import * as React from 'react';

import {
  FaLocationDot,
  FaMoon,
  FaSun,
  FaCloudMoonRain,
  FaCloudSunRain,
  FaCloudMoon,
  FaCloudSun,
  FaDroplet,
  FaMountainSun,
} from 'react-icons/fa6';

import { RiCelsiusFill } from 'react-icons/ri';

import { Text } from '../Text';
import { Card } from '../Card';

import type { IconType } from 'react-icons';
import type { Weather } from '../../types/weather.ts';
import { twMerge } from 'tailwind-merge';

export type WeatherCardProps = {
  className?: string;
  weather?: Weather;
};

const IconMap: Record<
  any,
  {
    night: IconType;
    day: IconType;
  }
> = {
  // Thunderstorm,
  // Drizzle,
  Rain: {
    night: FaCloudMoon,
    day: FaCloudSun,
  },
  // Snow,
  // Mist,
  // Smoke,
  // Haze,
  // Dust,
  // Fog,
  // Sand,
  // Ash,
  // Squall,
  // Tornado,
  Clear: {
    night: FaMoon,
    day: FaSun,
  },
  Clouds: {
    night: FaCloudMoonRain,
    day: FaCloudSunRain,
  },
};

export const WeatherCard = ({ weather, className }: WeatherCardProps) => {
  const WeatherIcon = React.useMemo(() => {
    if (!weather) {
      return null;
    }

    const weatherType = weather.weather[0].main;
    console.log(weatherType);

    if (typeof IconMap[weatherType] === 'undefined') {
      return null;
    }

    let Component = null;

    const now = new Date().getTime();

    if (now >= weather.sys.sunset && now < weather.sys.sunrise) {
      Component = IconMap[weatherType].night;
    } else {
      Component = IconMap[weatherType].day;
    }

    return <Component className="h-10 w-10" />;
  }, [weather]);

  if (!weather) {
    return null;
  }

  return (
    <Card
      as="article"
      className={twMerge('w-full flex flex-col gap-4', className)}
    >
      <Text className="flex items-center gap-1 text-sm">
        <FaLocationDot className="w-3 h-3" title="Location" />
        {`${weather.name}, ${weather.sys.country}`}
      </Text>
      <article className="flex items-center justify-between gap-1">
        <Text
          className={twMerge(
            'text-7xl flex justify-start gap-1',
            weather.main.temp <= 5 && 'text-blue-900 dark:text-blue-500',
            weather.main.temp > 5 &&
              weather.main.temp <= 25 &&
              'text-orange-900 dark:text-orange-600',
            weather.main.temp > 25 && 'text-red-900 dark:text-red-500'
          )}
        >
          {Math.round(weather.main.temp)}
          <RiCelsiusFill className="w-8 h-8 mt-2" />
        </Text>
        <Text as="div" className="flex flex-col gap-1">
          {WeatherIcon} {weather.weather[0].main}
        </Text>
      </article>
      <footer className="flex flex gap-4 items-center justify-start">
        <Text className="flex gap-2 items-center">
          <FaDroplet className="w-4 h-4" title="Humidity" />
          {weather.main.humidity}%
        </Text>
        <div className="flex gap-2 items-center">
          <FaMountainSun
            className="w-4 h-4 text-black dark:text-gray-100"
            title="Atmospheric Pressure"
          />
          <Text>
            {weather.main.pressure} <abbr title="hectoPascals">hPa</abbr>
          </Text>
        </div>
      </footer>
    </Card>
  );
};
