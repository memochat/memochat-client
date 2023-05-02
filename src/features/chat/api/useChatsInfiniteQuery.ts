import queryString from 'query-string';
import { createInfiniteQuery } from 'react-query-kit';
import { z } from 'zod';
import { fromZodError } from 'zod-validation-error';

import axios from '@src/shared/configs/axios';
import { Chat } from '@src/shared/types/chat';
import { MemoChatError } from '@src/shared/types/api';
import { PageMeta } from '@src/shared/types/pageMeta';
import { ChatListSchema, PageMetaSchema } from '@src/schema';
import { logError } from '@src/shared/utils/log';

type Response = {
  data: Chat[];
  meta?: PageMeta;
};
type Variables = { roomId: number };
type Query = {
  page: number;
  take: number;
};

export const getChats = async ({ roomId, query }: Variables & { query: Query }) => {
  const res = await axios.get<Response>(
    queryString.stringifyUrl({
      url: `/rooms/${roomId}/chats`,
      query,
    }),
  );

  try {
    z.object({
      data: ChatListSchema,
      meta: PageMetaSchema.nullable(),
    }).parse(res.data);
  } catch (e) {
    logError(fromZodError(e));
  }
  return res.data;
};

const take = 20;

export const useChatsInfiniteQuery = createInfiniteQuery<Response, Variables, MemoChatError>({
  primaryKey: '/rooms/:id/chats',
  queryFn: ({ queryKey: [, { roomId }], pageParam = 1 }) => {
    // pageParam || 1 : pageParam이 null인 경우 page를 1로 설정해주기 위함
    return getChats({ roomId, query: { page: pageParam || 1, take } });
  },
  getNextPageParam: (lastPage, pages) => {
    if (!lastPage.meta?.hasNextPage) {
      return;
    }

    return pages.length + 1;
  },
});

export default useChatsInfiniteQuery;
