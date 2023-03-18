import Image from 'next/image';

import * as S from './ChatListEmpty.styles';

const ChatListEmpty = () => {
  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <Image
          src="/images/chat-empty.png"
          alt=""
          layout="responsive"
          width="100%"
          height="100%"
          objectFit="contain"
        />
      </S.ImageWrapper>
      <S.Text>메모를 작성해보세요.</S.Text>
    </S.Wrapper>
  );
};

export default ChatListEmpty;
