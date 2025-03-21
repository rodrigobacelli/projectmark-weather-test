import { twMerge } from 'tailwind-merge';

import { Container } from '../Container';
import { Logo } from '../Logo';
import { ThemeDropdown } from '../ThemeDropdown';

export type HeaderProps = {
  className?: string;
};

export const Header = ({ className }: HeaderProps) => {
  return (
    <header
      className={twMerge(
        'w-full bg-gray-200 dark:bg-gray-700 flex justify-center',
        className
      )}
    >
      <Container className="container py-4 flex items-center justify-between">
        <Logo size="large" />
        <ThemeDropdown />
      </Container>
    </header>
  );
};
