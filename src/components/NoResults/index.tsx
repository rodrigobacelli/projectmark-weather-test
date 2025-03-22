import { twMerge } from 'tailwind-merge';

import { CiCloudOff } from 'react-icons/ci';

import { Text } from '../Text';

export type NoResultsProps = {
  id?: string;
  className?: string;
};

export const NoResults = ({ className }: NoResultsProps) => {
  return (
    <div
      className={twMerge(
        'w-full h-full flex items-center justify-center',
        className
      )}
    >
      <Text className="flex flex-col gap-2 items-center">
        <CiCloudOff className="w-8 h-8" />
        No results found.
      </Text>
    </div>
  );
};
