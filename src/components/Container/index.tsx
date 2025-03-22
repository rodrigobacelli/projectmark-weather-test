import * as React from 'react';

import { twMerge } from 'tailwind-merge';

export type ContainerProps = React.HTMLAttributes<unknown> & {
  children?: React.ReactNode | React.ReactNode[];
  as?: keyof React.JSX.IntrinsicElements;
};

export const Container = ({
  children,
  className,
  as: Component = 'div',
  ...allProps
}: ContainerProps) => {
  return (
    <Component {...allProps} className={twMerge('container px-4', className)}>
      {children}
    </Component>
  );
};
