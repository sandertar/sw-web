import { QueryClient } from '@tanstack/react-query';

let queryClient: QueryClient;

export function getQueryClient(): QueryClient {
  if (!queryClient) {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 1_000 * 60 * 5,
          cacheTime: 1_000 * 60 * 6,
        },
      },
    });
  }
  return queryClient;
}
