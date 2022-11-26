import { NextPage } from 'next';
import Image from 'next/image';

import * as S from './404.styles';

const NotFound: NextPage = () => {
  return (
    <S.Wrapper>
      <S.Title>페이지를 찾을 수 없음</S.Title>
      <S.ImageWrapper>
        <Image
          src="/images/404.png"
          alt="404"
          layout="responsive"
          width="100%"
          height="100%"
          objectFit="contain"
        />
      </S.ImageWrapper>
      <S.LinkButton href="/">홈으로</S.LinkButton>
    </S.Wrapper>
  );
};

export default NotFound;
