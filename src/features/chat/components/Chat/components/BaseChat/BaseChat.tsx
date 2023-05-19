import dayjs from 'dayjs';
import { TouchEvent, useEffect, useRef } from 'react';

import * as S from './BaseChat.styles';
import { BaseChatProps } from './BaseChat.types';

const BaseChat = ({ message, createdAt, onOpenContextMenu }: BaseChatProps) => {
  const ref = useRef(null);
  const handleContextMenu = async (e: TouchEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e.touches[0];
    ref.current = setTimeout(() => {
      onOpenContextMenu({ x: clientX, y: clientY });
    }, 1000);
  };

  useEffect(() => {
    return () => {
      ref.current = null;
      clearTimeout(ref.current);
    };
  }, []);

  return (
    <S.Wrapper
      onContextMenu={(e) => e.preventDefault()}
      onTouchStart={handleContextMenu}
      onTouchEnd={() => {
        clearTimeout(ref.current);
      }}
    >
      <S.Message>{message}</S.Message>
      <S.Date>{`${dayjs(createdAt).format('hh:mm A')}`}</S.Date>
    </S.Wrapper>
  );
};

export default BaseChat;
