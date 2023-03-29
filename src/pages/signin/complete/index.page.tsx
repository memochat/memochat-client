import { useRouter } from 'next/router';
import { NextPage } from 'next';

import { Button } from '@src/shared/components';
import { loginLottie } from '@src/assets/lottie';
import Lottie from '@src/shared/components/Lottie';

import * as S from './complete.styles';

const SignInComplete: NextPage = () => {
  const router = useRouter();

  const handleOnStartBtnClick = () => {
    router.push('/rooms');
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>로그인을 완료하였습니다!</S.Title>
      </S.Header>
      <Lottie animationData={loginLottie} autoplay />
      <S.ButtonContainer>
        <Button onClick={handleOnStartBtnClick}>시작하기</Button>
      </S.ButtonContainer>
    </S.Wrapper>
  );
};

export default SignInComplete;
