import * as React from 'react';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

export type ProvidersProps = {
  children?: React.ReactNode | React.ReactNode[];
}

export const Providers = ({children}: ProvidersProps) => {
  const queryClient = new QueryClient();
  
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}