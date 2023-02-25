import dayjs from 'dayjs';

import { ChatProps } from './Chat.types';
import * as S from './Chat.styles';

import { highlightenLink } from '@src/shared/utils/highlightenLink';

const Chat = ({ type = 'TEXT', message, createdAt, link }: ChatProps) => {
  return (
    <>
      {/* TODO : 우 클릭시 챗 옵션 모달 띄우기 (LinkBlock에서도 똑같이) */}
      <S.Wrapper>
        <S.Message>{type === 'LINK' ? highlightenLink(message) : message}</S.Message>
        <S.Date>{`${dayjs(createdAt).format('hh:mm A')}`}</S.Date>
      </S.Wrapper>
      {type === 'LINK' && link && (
        <S.LinkBlock href={link.href}>
          <S.LinkImageConatiner>
            <img src={link.thumbnail} alt="" width="100%" />
          </S.LinkImageConatiner>
          <S.LinkContent>
            {link.title && (
              <S.LinkTitle hasDescription={!!link.description}>{link.title}</S.LinkTitle>
            )}
            {link.description && (
              <S.LinkDescrition hasTitle={!!link.title}>{link.description}</S.LinkDescrition>
            )}
          </S.LinkContent>
        </S.LinkBlock>
      )}
    </>
  );
};

export default Chat;
