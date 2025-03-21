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
    <div className="w-full flex gap-2 justify-end items-center">
      {lastUpdated && !isUpdating ? (
        <Text className={twMerge('text-xs', className)}>
          Updated at{' '}
          <time dateTime={format(lastUpdated, 'yyyy-MM-dd HH:mm:ss')}>
            {format(new Date(lastUpdated), 'MM/dd/yyyy HH:mm:ss')}
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
