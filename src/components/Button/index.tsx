import * as React from 'react';

import { twMerge } from 'tailwind-merge';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  startIcon?: React.FunctionComponent<{ className?: string }>;
  endIcon?: React.FunctionComponent<{ className?: string }>;
};

export const Button = ({
  className,
  children,
  startIcon: StartIcon,
  endIcon: EndIcon,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      {...buttonProps}
      className={twMerge(
        'text-sm flex items-center gap-1 px-2 py-1 rounded-sm border enabled:cursor-pointer',
        'text-gray-900 dark:text-gray-300 border-gray-900 dark:border-gray-300',
        'enabled:hover:bg-gray-900/20 enabled:dark:hover:bg-gray-100/20',
        'enabled:focus:bg-gray-800/10 enabled:dark:focus:bg-gray-200/10',
        'disabled:text-gray-500 disabled:border-gray-500',
        className
      )}
    >
      {StartIcon ? <StartIcon /> : null}
      {children}
      {EndIcon ? <EndIcon /> : null}
    </button>
  );
};
