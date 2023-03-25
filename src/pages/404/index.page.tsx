import { NextPage } from 'next';
import Image from 'next/image';

import * as S from './404.styles';

const NotFound: NextPage = () => {
  return (
    <S.Wrapper>
      <S.Title>페이지를 찾을 수 없음</S.Title>
      <Image
        src="/images/404.png"
        alt="404"
        width={292}
        height={231}
        style={{ objectFit: 'contain' }}
      />
      <S.LinkButton href="/">홈으로</S.LinkButton>
    </S.Wrapper>
  );
};

export default NotFound;
