import { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import Link from 'next/link';

import * as S from './home.styles';

import splashLottie from '@src/assets/lotti/splash.json';
import GuestGuard from '@src/features/auth/components/GuestGuard';
import { NextPageWithLayout } from '@src/shared/types/next';

const Home: NextPageWithLayout = () => {
  const lottieRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lottieRef === null) {
      return;
    }

    Lottie.loadAnimation({
      container: lottieRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: splashLottie,
      path: '',
    });
  }, []);

  return (
    <S.Wrapper>
      <S.Title>내 메모를 채팅처럼</S.Title>
      <img src="/images/logo.png" alt="메모쳇" width={222} height={30} />
      <S.Lottie ref={lottieRef} />
      <S.LoginBtn type="button" href="/signin">
        로그인
      </S.LoginBtn>
      <S.Box>
        <Link href="/signup" passHref>
          <S.TextLink>회원가입</S.TextLink>
        </Link>
        <S.Divider />
        {/* TODO: 약관 링크 달기 */}
        <Link href="/" passHref>
          <S.TextLink>이용약관 | 개인정보처리방침</S.TextLink>
        </Link>
      </S.Box>
    </S.Wrapper>
  );
};

Home.getLayout = (page) => <GuestGuard>{page}</GuestGuard>;

export default Home;
