import { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import { useRouter } from 'next/router';

import * as S from './SigninComplete.styles';
import Button from '../reusable/Button';
import { SigninCompleteProps } from './SigninComplete.types';

import loginLottie from '@src/assets/lotti/login.json';

const SigninComplete = ({}: SigninCompleteProps) => {
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
    //push home
    router.push('/');
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

export default SigninComplete;
