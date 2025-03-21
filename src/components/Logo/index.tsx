import { twMerge } from 'tailwind-merge';

import LogoIcon from '../../assets/logo.svg?react';
import { Text } from '../Text';

export type LogoProps = {
  size?: 'small' | 'large';
};

export const Logo = ({ size = 'large' }: LogoProps) => {
  return (
    <div className="flex items-center gap-2">
      <LogoIcon
        className={twMerge(
          size === 'small' && 'w-12 h-12',
          size === 'large' && 'w-16 h-16'
        )}
      />
      <Text
        as="b"
        className={twMerge(
          size === 'small' && 'text-lg',
          size === 'large' && 'text-2xl'
        )}
      >
        Weather App
      </Text>
    </div>
  );
};
