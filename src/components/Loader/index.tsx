import { twMerge } from 'tailwind-merge';

import LoaderIcon from '../../assets/loader.svg?react';

export type LoaderProps = {
  className?: string;
  size?: number;
};

export const Loader = ({ className, size = 40 }: LoaderProps) => {
  return (
    <div
      className={twMerge(
        'w-full h-full flex items-center justify-center',
        className
      )}
    >
      <LoaderIcon
        className="animate-spin text-gray-700 dark:text-gray-400"
        style={{
          width: size,
          height: size,
        }}
      />
    </div>
  );
};
