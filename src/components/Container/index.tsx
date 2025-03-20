import * as React from 'react';

import { twMerge } from 'tailwind-merge';

export type ContainerProps = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
};

export const Container = ({
  children,
  className,
  as: Component = 'div',
}: ContainerProps) => {
  return (
    <Component className={twMerge('container px-4', className)}>
      {children}
    </Component>
  );
};
