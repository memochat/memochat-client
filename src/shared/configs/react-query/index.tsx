import { QueryClient } from '@tanstack/react-query';

import { MemoChatError } from '@src/shared/types/api';
import { toast } from '@src/shared/utils/toast';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 1 * 1000 * 60,
      cacheTime: 5 * 1000 * 60,
      onError: (e) => {
        if (e instanceof MemoChatError) {
          toast.error(e.message);
          return;
        }
      },
    },
    mutations: {
      onError: (e) => {
        if (e instanceof MemoChatError) {
          toast.error(e.message);
          return;
        }
      },
    },
  },
});
