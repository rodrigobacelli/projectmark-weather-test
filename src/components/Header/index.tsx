import { twMerge } from 'tailwind-merge';
import { Container } from '../Container';

import Logo from '../../assets/logo.svg?react';
import { Text } from '../Text';

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
        <div className="flex items-center gap-2">
          <Logo className="w-16 h-16" />
          <Text as="b" className="text-2xl">
            Weather App
          </Text>
        </div>
        <div>Theme toggler</div>
      </Container>
    </header>
  );
};
