import queryString from 'query-string';
import { createQuery } from 'react-query-kit';

import axios from '@src/shared/configs/axios';
import { GetChats } from '@src/shared/types/api/chat';
import { ChatListFilter } from '@src/shared/types/chat';

export const getChats = async ({ roomId, offset, limit }: ChatListFilter) => {
  const res = await axios.get<GetChats['res']>(
    queryString.stringifyUrl({
      url: `/rooms/${roomId}/chats`,
      query: { limit, offset },
    }),
  );
  return res.data;
};

const useChatsQuery = createQuery<GetChats['res'], ChatListFilter>({
  primaryKey: '/rooms/:id/chats',
  queryFn: ({ queryKey: [, param] }) => getChats(param),
});

export default useChatsQuery;
