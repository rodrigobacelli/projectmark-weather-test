import { twMerge } from 'tailwind-merge';

import { Button, ButtonProps } from '../Button';

export type IconButtonProps = ButtonProps;

export const IconButton = ({
  className,
  children,
  ...buttonProps
}: IconButtonProps) => {
  return (
    <Button {...buttonProps} className={twMerge('rounded-full p-2', className)}>
      {children}
    </Button>
  );
};
