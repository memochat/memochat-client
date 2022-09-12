import { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

import * as S from './complete.styles';

import loginLottie from '@src/assets/lotti/login.json';
import { Button } from '@src/shared/components';
import { ROUTE } from '@src/shared/constants/route';

const SignInComplete: NextPage = () => {
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
      animationData: loginLottie,
      path: '',
    });
  }, []);

  const handleOnStartBtnClick = () => {
    router.push(ROUTE.HOME);
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>로그인을 완료하였습니다!</S.Title>
      </S.Header>
      <S.Content ref={lottieRef} />
      <S.ButtonContainer>
        <Button onClick={handleOnStartBtnClick}>시작하기</Button>
      </S.ButtonContainer>
    </S.Wrapper>
  );
};

export default SignInComplete;
