import * as React from 'react';

import { twMerge } from 'tailwind-merge';

export type CardProps = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
};

export const Card = ({
  children,
  className,
  as: Component = 'div',
}: CardProps) => {
  return (
    <Component
      className={twMerge(
        'shadow-md p-4 bg-gray-100 dark:bg-gray-800 rounded-lg ring shadow-xl ring-gray-900/5',
        className
      )}
    >
      {children}
    </Component>
  );
};
