import queryString from 'query-string';
import { createInfiniteQuery } from 'react-query-kit';

import axios from '@src/shared/configs/axios';
import { Chat } from '@src/shared/types/chat';
import { MemoChatError } from '@src/shared/types/api';

type Response = Chat[];
type Variables = { roomId: number };
type Query = {
  limit: number;
  offset: number;
};

export const getChats = async ({ roomId, query }: Variables & { query: Query }) => {
  const res = await axios.get<Response>(
    queryString.stringifyUrl({
      url: `/rooms/${roomId}/chats`,
      query,
    }),
  );
  return res.data;
};

const limit = 20;

export const useChatsInfiniteQuery = createInfiniteQuery<Response, Variables, MemoChatError>({
  primaryKey: '/rooms/:id/chats',
  queryFn: ({ queryKey: [, { roomId }], pageParam = 1 }) => {
    return getChats({ roomId, query: { offset: pageParam, limit } });
  },
  getNextPageParam: (lastPage, pages) => {
    if (lastPage.length < limit) {
      return;
    }

    return pages.length + 1;
  },
});

export default useChatsInfiniteQuery;
