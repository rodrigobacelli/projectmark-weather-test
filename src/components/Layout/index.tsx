import * as React from 'react';

import { twMerge } from 'tailwind-merge';
import { Header } from '../Header';
import { useTheme } from '../../hooks/useTheme';
import { Footer } from '../Footer';

export type LayoutProps = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
};

export const Layout = ({ children, className }: LayoutProps) => {
  const { theme } = useTheme();
  return (
    <div
      className={twMerge(
        'w-screen h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900 relative',
        theme,
        className
      )}
    >
      <Header />
      <div className="w-full flex flex-col items-center flex-1 pt-16 pb-10">
        {children}
      </div>
      <Footer />
    </div>
  );
};
