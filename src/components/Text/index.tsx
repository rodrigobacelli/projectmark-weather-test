import * as React from 'react';

import { twMerge } from 'tailwind-merge';

export type TextProps = React.HTMLAttributes<unknown> & {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
};

export const Text = ({
  children,
  className,
  as: Component = 'p',
  ...allProps
}: TextProps) => {
  return (
    <Component
      {...allProps}
      className={twMerge('text-gray-900 dark:text-gray-100', className)}
    >
      {children}
    </Component>
  );
};
