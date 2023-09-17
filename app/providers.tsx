'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

import { getQueryClient } from '@/app/getQueryClient';

interface Props {
  children: ReactNode;
}

export default function Providers({ children }: Props): JSX.Element {
  const queryClient = getQueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
