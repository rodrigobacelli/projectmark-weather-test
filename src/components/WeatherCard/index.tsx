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
  FaTornado,
  FaVolcano,
} from 'react-icons/fa6';

import {
  RiCelsiusFill,
  RiDashboard3Line,
  RiMistFill,
  RiMoonFoggyFill,
  RiSunFoggyFill,
} from 'react-icons/ri';

import { Text } from '../Text';
import { Card } from '../Card';

import type { IconType } from 'react-icons';
import { Weather, WeatherMainConditions } from '../../types/weather.ts';
import { twMerge } from 'tailwind-merge';
import { WiDust, WiSandstorm, WiSmoke } from 'react-icons/wi';
import { IoThunderstorm } from 'react-icons/io5';
import { MdThunderstorm } from 'react-icons/md';
import { CiCloudDrizzle } from 'react-icons/ci';
import { BsCloudSnowFill } from 'react-icons/bs';

export type WeatherCardProps = {
  className?: string;
  weather?: Weather;
};

const IconMap: Record<
  WeatherMainConditions,
  {
    night: IconType;
    day: IconType;
  }
> = {
  Thunderstorm: {
    night: MdThunderstorm,
    day: MdThunderstorm,
  },
  Drizzle: {
    night: CiCloudDrizzle,
    day: CiCloudDrizzle,
  },
  Snow: {
    night: BsCloudSnowFill,
    day: BsCloudSnowFill,
  },
  Mist: {
    night: RiMistFill,
    day: RiMistFill,
  },
  Smoke: {
    night: WiSmoke,
    day: WiSmoke,
  },
  Haze: {
    night: RiMoonFoggyFill,
    day: RiSunFoggyFill,
  },
  Dust: {
    night: WiDust,
    day: WiDust,
  },
  Fog: {
    night: RiMoonFoggyFill,
    day: RiSunFoggyFill,
  },
  Sand: {
    night: WiSandstorm,
    day: WiSandstorm,
  },
  Ash: {
    night: FaVolcano,
    day: FaVolcano,
  },
  Squall: {
    night: IoThunderstorm,
    day: IoThunderstorm,
  },
  Tornado: {
    night: FaTornado,
    day: FaTornado,
  },
  Clear: {
    night: FaMoon,
    day: FaSun,
  },
  Clouds: {
    night: FaCloudMoon,
    day: FaCloudSun,
  },
  Rain: {
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
      data-testid="weather-card"
      className={twMerge('w-full flex flex-col gap-4', className)}
    >
      <Text className="flex items-center gap-1 text-sm">
        <FaLocationDot className="w-3 h-3" title="Location" />
        {`${weather.name}, ${weather.sys.country}`}
      </Text>
      <article className="flex items-center justify-between gap-1">
        <Text
          data-testid="weather-card-temperature"
          className={twMerge(
            'text-7xl flex justify-start gap-1',
            weather.main.temp <= 5 && 'text-blue-900 dark:text-blue-500',
            weather.main.temp > 5 &&
              weather.main.temp <= 25 &&
              'text-orange-900 dark:text-orange-600',
            weather.main.temp > 25 && 'text-red-700 dark:text-red-500'
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
        <Text
          className="flex gap-2 items-center"
          data-testid="weather-card-humidity"
        >
          <FaDroplet className="w-4 h-4" title="Humidity" />
          {weather.main.humidity}%
        </Text>
        <div className="flex gap-2 items-center">
          <RiDashboard3Line
            className="w-4 h-4 text-gray-900 dark:text-gray-100"
            title="Atmospheric Pressure"
          />
          <Text data-testid="weather-card-pressure">
            {weather.main.pressure} <abbr title="hectoPascals">hPa</abbr>
          </Text>
        </div>
      </footer>
    </Card>
  );
};
