import { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import { useRouter } from 'next/router';

import { SignupCompleteProps } from './SignupComplete.types';
import * as S from './SignupComplete.styles';
import Button from '../reusable/Button';

import signinAnimation from '@src/assets/lotti/signin.json';

const SignupComplete = ({}: SignupCompleteProps) => {
  const lottieRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (lottieRef === null) {
      return;
    }

    Lottie.loadAnimation({
      container: lottieRef.current as HTMLDivElement,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: signinAnimation,
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
        <S.Title>회원가입을 완료하였습니다!</S.Title>
      </S.Header>
      <S.Content ref={lottieRef} />
      <S.ButtonContainer>
        <Button onClick={handleOnStartBtnClick}>시작하기</Button>
      </S.ButtonContainer>
    </S.Wrapper>
  );
};

export default SignupComplete;
