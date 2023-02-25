import dayjs from 'dayjs';
import { MouseEvent } from 'react';

import { BaseChatProps } from './BaseChat.types';
import * as S from './BaseChat.styles';

const BaseChat = ({ message, createdAt, onContextMenu }: BaseChatProps) => {
  const handleContextMenu = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    onContextMenu?.(e);
  };

  return (
    <S.Wrapper onContextMenu={handleContextMenu}>
      <S.Message>{message}</S.Message>
      <S.Date>{`${dayjs(createdAt).format('hh:mm A')}`}</S.Date>
    </S.Wrapper>
  );
};

export default BaseChat;
