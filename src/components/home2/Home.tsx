import Lottie from 'lottie-web';
import Image from 'next/image';
import { MouseEventHandler, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import * as S from './Home.styles';
import { HomeProps } from './Home.types';

import splashLottie from '@src/assets/lotti/splash.json';

const Home = ({}: HomeProps) => {
  const lottieRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (lottieRef === null) {
      return;
    }

    Lottie.loadAnimation({
      container: lottieRef.current as HTMLDivElement,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: splashLottie,
      path: '',
    });
  }, []);

  const handleLoginBtnClick: MouseEventHandler<HTMLButtonElement> = () => {
    router.push('/signin');
  };

  return (
    <S.Wrapper>
      <S.Title>내 메모를 채팅처럼</S.Title>
      <Image src="/images/logo.png" alt="logo" layout="fixed" width="222px" height="30px" />
      <S.Content ref={lottieRef} />
      <S.LoginBtn type="button" onClick={handleLoginBtnClick}>
        로그인
      </S.LoginBtn>
      <S.Box>
        <Link href="/signup" passHref>
          <span>회원가입</span>
        </Link>
        <S.Divider />
        {/* 약관 링크 달기 */}
        <Link href="/" passHref>
          <span>이용약관|개인정보처리방침</span>
        </Link>
      </S.Box>
    </S.Wrapper>
  );
};

export default Home;
