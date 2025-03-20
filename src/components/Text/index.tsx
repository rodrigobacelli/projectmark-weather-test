import * as React from 'react';

import { twMerge } from 'tailwind-merge';

export type TextProps = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
};

export const Text = ({
  children,
  className,
  as: Component = 'p',
}: TextProps) => {
  return (
    <Component className={twMerge('text-black dark:text-gray-100', className)}>
      {children}
    </Component>
  );
};
