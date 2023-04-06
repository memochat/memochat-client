import dayjs from 'dayjs';
import { ForwardedRef, forwardRef, useCallback } from 'react';
import { Virtuoso, VirtuosoHandle } from 'react-virtuoso';

import Chat from '@src/features/chat/components/Chat/Chat';

import { ChatListProps } from './ChatList.types';
import * as S from './ChatList.styles';

const ChatList = forwardRef(
  (
    {
      data,
      emptyComponent = null,
      hasNextPage,
      fetchNextPage,
      totalCount = Number.MAX_SAFE_INTEGER,
    }: ChatListProps,
    ref: ForwardedRef<VirtuosoHandle>,
  ) => {
    const checkIsDateVisible = useCallback(
      (index: number) => {
        return (
          index === data.length - 1 ||
          !dayjs(data[index].createdAt).isSame(data[index + 1].createdAt, 'day')
        );
      },
      [data],
    );

    const itemContent = useCallback(
      (index: number) => {
        const reversedIndex = totalCount - index - 1;
        const chat = data[reversedIndex];

        return (
          <>
            {checkIsDateVisible(reversedIndex) && (
              <S.DateWrapper>
                <S.Date>{dayjs(chat.createdAt).format('YYYY년 MM월 DD일 ddd요일')}</S.Date>
              </S.DateWrapper>
            )}
            <Chat chat={chat} />
          </>
        );
      },
      [checkIsDateVisible, data, totalCount],
    );

    const startReached = () => {
      if (hasNextPage) {
        fetchNextPage();
      }
    };

    if (!data) {
      return null;
    }

    if (data.length === 0) {
      return <>{emptyComponent}</>;
    }

    return (
      <Virtuoso
        ref={ref}
        data={data}
        itemContent={itemContent}
        totalCount={totalCount}
        initialTopMostItemIndex={data.length - 1}
        firstItemIndex={totalCount - data.length}
        startReached={startReached}
        style={{ height: '100%' }}
      />
    );
  },
);

ChatList.displayName = 'ChatList';

export default ChatList;
