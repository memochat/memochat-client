import dayjs from 'dayjs';
import { ForwardedRef, forwardRef, useCallback } from 'react';
import { Virtuoso, VirtuosoHandle } from 'react-virtuoso';

import Chat from '@src/features/chat/components/Chat/Chat';

import { ChatListProps } from './ChatList.types';
import * as S from './ChatList.styles';

// TODO: 전체 개수 -> api에서 전달받는 개수로 수정
const totalCount = 25;

const ChatList = forwardRef(
  (
    { data, emptyComponent = null, hasNextPage, fetchNextPage }: ChatListProps,
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
            <Chat
              type={chat.type}
              message={chat.message}
              createdAt={dayjs(chat.createdAt).toDate()}
              link={{
                href: '',
                title: chat.title,
                description: chat.description,
                thumbnail: chat.thumbnail,
              }}
              imageUrls={[
                'https://images.unsplash.com/photo-1628015081036-0747ec8f077a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
              ]}
            />
          </>
        );
      },
      [checkIsDateVisible, data],
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
