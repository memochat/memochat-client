import dayjs from 'dayjs';
import React, { useCallback } from 'react';

import { ChatListProps } from './ChatList.types';
import * as S from './ChatList.styles';

import Chat from '@src/features/chat/components/Chat/Chat';

const ChatList = ({ data, memoFormHeight }: ChatListProps) => {
  const checkIsDateVisible = useCallback(
    (index: number) => {
      return (
        index === data.length - 1 ||
        !dayjs(data[index].createdAt).isSame(data[index + 1].createdAt, 'day')
      );
    },
    [data],
  );

  return (
    <S.Wrapper memoFormHeight={memoFormHeight}>
      {data.map(({ id, type, message, createdAt, title, description, thumbnail }, index) => (
        <React.Fragment key={id}>
          <Chat
            type={type}
            message={message}
            createdAt={dayjs(createdAt).toDate()}
            link={{
              href: '',
              title,
              description,
              thumbnail,
            }}
          />
          {checkIsDateVisible(index) && (
            <S.Date>{dayjs(createdAt).format('YYYY년 MM월 DD일 ddd요일')}</S.Date>
          )}
        </React.Fragment>
      ))}
    </S.Wrapper>
  );
};

export default ChatList;
