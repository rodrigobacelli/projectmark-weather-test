import { twMerge } from 'tailwind-merge';

import { Button, ButtonProps } from '../Button';

export type IconButtonProps = Omit<ButtonProps, 'startIcon' | 'endIcon'> & {
  icon: ButtonProps['startIcon'] | ButtonProps['endIcon'];
};

export const IconButton = ({
  className,
  children,
  icon: Icon,
  ...buttonProps
}: IconButtonProps) => {
  if (!Icon) {
    return null;
  }

  return (
    <Button {...buttonProps} className={twMerge('rounded-full p-2', className)}>
      <Icon />
    </Button>
  );
};
