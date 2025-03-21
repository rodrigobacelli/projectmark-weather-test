import { twMerge } from 'tailwind-merge';

import { Container } from '../Container';
import { Text } from '../Text';
import { Logo } from '../Logo';

export const Footer = () => {
  return (
    <footer
      className={twMerge(
        'w-full flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-800'
      )}
    >
      <Container className="py-8">
        <Logo size="small" />
      </Container>
      <div className="flex w-full justify-center py-2 bg-gray-300 dark:bg-gray-700">
        <Text>Weather App @ 2025</Text>
      </div>
    </footer>
  );
};
