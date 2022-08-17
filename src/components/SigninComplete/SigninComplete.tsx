import { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import { useRouter } from 'next/router';

import * as S from './SigninComplete.styles';
import Button from '../reusable/Button';
import { SigninCompleteProps } from './SigninComplete.types';

//TODO: 로티나오면 변경
// import signupLottie from '@src/assets/lotti/signup.json';

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
      // animationData: signupLottie,
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
