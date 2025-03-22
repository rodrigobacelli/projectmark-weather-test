import { twMerge } from 'tailwind-merge';

import { format } from 'date-fns/format';

import { Button } from '../Button';
import { Text } from '../Text';
import { RxUpdate } from 'react-icons/rx';

export type DataUpdaterProps = {
  className?: string;
  lastUpdated?: Date;
  onUpdate?: () => void;
  isUpdating?: boolean;
};

export const DataUpdater = ({
  className,
  lastUpdated,
  onUpdate,
  isUpdating,
}: DataUpdaterProps) => {
  return (
    <div
      className={twMerge(
        'w-full flex flex-col-reverse md:flex-row gap-2 justify-end items-end md:items-center',
        className
      )}
    >
      {lastUpdated && !isUpdating ? (
        <Text className="text-xs">
          Updated at{' '}
          <time dateTime={format(lastUpdated, 'yyyy-MM-dd HH:mm:ss')}>
            {format(lastUpdated, 'MM/dd/yyyy HH:mm:ss')}
          </time>
        </Text>
      ) : null}
      <Button
        onClick={onUpdate}
        disabled={isUpdating}
        startIcon={({ className, ...startIconProps }) => (
          <RxUpdate
            {...startIconProps}
            className={twMerge(className, isUpdating && 'animate-spin')}
          />
        )}
      >
        Update
      </Button>
    </div>
  );
};
