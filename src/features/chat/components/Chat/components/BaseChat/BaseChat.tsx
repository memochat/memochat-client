import dayjs from 'dayjs';

import useLongClick from '@src/shared/hooks/useLongClick';

import * as S from './BaseChat.styles';
import { BaseChatProps } from './BaseChat.types';

const BaseChat = ({ message, createdAt, onOpenContextMenu }: BaseChatProps) => {
  const { onTouchEnd, onTouchStart } = useLongClick<HTMLDivElement>((e) => {
    const { clientX, clientY } = e.touches[0];
    onOpenContextMenu({ x: clientX, y: clientY });
  });

  return (
    <S.Wrapper
      onContextMenu={(e) => e.preventDefault()}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <S.Message>{message}</S.Message>
      <S.Date>{`${dayjs(createdAt).format('hh:mm A')}`}</S.Date>
    </S.Wrapper>
  );
};

export default BaseChat;
