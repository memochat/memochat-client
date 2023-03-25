import queryString from 'query-string';
import { createInfiniteQuery } from 'react-query-kit';

import axios from '@src/shared/configs/axios';
import { GetChats } from '@src/shared/types/api/chat';

type Response = GetChats['res'];
type Variables = Pick<GetChats['param'], 'roomId'>;

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

export const useChatsInfiniteQuery = createInfiniteQuery<Response, Variables, Error>({
  primaryKey: '/rooms/:id/chats',
  queryFn: ({ queryKey: [, { roomId }], pageParam = 1 }) => {
    return getChats({ roomId, offset: pageParam, limit });
  },
  getNextPageParam: (lastPage, pages) => {
    if (lastPage.length < limit) {
      return;
    }

    return pages.length + 1;
  },
});

export default useChatsInfiniteQuery;
