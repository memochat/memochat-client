import Image from 'next/image';

import * as S from './RoomListEmpty.styles';

const RoomListEmpty = () => {
  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <Image src="/images/room-empty.png" alt="" fill style={{ objectFit: 'contain' }} />
      </S.ImageWrapper>
      <S.Text>이런, 메모룸이 텅 비었네요.</S.Text>
    </S.Wrapper>
  );
};

export default RoomListEmpty;
