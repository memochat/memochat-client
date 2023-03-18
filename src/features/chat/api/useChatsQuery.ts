import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import queryString from 'query-string';

import axios from '@src/shared/configs/axios';
import { GetChats } from '@src/shared/types/api/chat';
import { chatKeys } from '@src/shared/utils/queryKeys';
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

const useChatsQuery = (filter: ChatListFilter, options?: UseQueryOptions<GetChats['res']>) =>
  useQuery(chatKeys.list(filter), () => getChats(filter), options);

export default useChatsQuery;
