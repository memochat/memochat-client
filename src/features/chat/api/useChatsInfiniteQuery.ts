import { useInfiniteQuery, UseInfiniteQueryOptions } from '@tanstack/react-query';
import queryString from 'query-string';

import axios from '@src/shared/configs/axios';
import { GetChats } from '@src/shared/types/api/chat';

export const getChats = async ({ roomId, offset, limit }: GetChats['param']) => {
  const res = await axios.get<GetChats['res']>(
    queryString.stringifyUrl({
      url: `/rooms/${roomId}/chats`,
      query: { limit, offset },
    }),
  );
  return res.data;
};

const limit = 20;

export const useChatsInfiniteQuery = (
  { roomId }: { roomId: number },
  options?: UseInfiniteQueryOptions<GetChats['res']>,
) => {
  const result = useInfiniteQuery({
    ...options,
    queryKey: [`/rooms/${roomId}/chats`],
    queryFn: ({ pageParam = 1 }) => {
      return getChats({ roomId, offset: pageParam, limit });
    },
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length < limit) {
        return;
      }

      return pages.length + 1;
    },
  });

  const chats = result.data?.pages.reduce(
    (mergedContents, currentContents) => [...mergedContents, ...(currentContents || [])],
    [],
  );

  return {
    ...result,
    chats,
  };
};

export default useChatsInfiniteQuery;
