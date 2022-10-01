import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

import * as S from './signup.styles';

import EmailSection from '@src/features/auth/components/EmailSection';
import PasswordSection from '@src/features/auth/components/PasswordSection';
import useSignupForm, { SignUpFormType } from '@src/features/auth/hooks/useSignupForm';
import { Button, Stepper } from '@src/shared/components';

const SignUp: NextPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { control, handleSubmit, formState } = useSignupForm();
  const router = useRouter();

  const handleEmailVerifyComplete = () => {
    setActiveIndex((prev) => prev + 1);
  };

  const onSubmit: SubmitHandler<SignUpFormType> = (values) => {
    alert(JSON.stringify(values, null, 2));
    router.push('/signup/complete');
  };

  //TODO: 쓰로틀로 아이디 중복체크

  return (
    <S.Wrapper as="form" onSubmit={handleSubmit(onSubmit)}>
      <S.Title>
        작성한 메모의 저장을 위해서
        <br /> 회원가입이 필요해요!
      </S.Title>
      <Stepper
        activeIndex={activeIndex}
        css={{
          '& .stepper-connector': {
            marginBottom: '16px',
          },
        }}
      >
        <S.Content>
          <EmailSection
            handleEmailVerifyComplete={handleEmailVerifyComplete}
            control={control}
            name="email"
          />
        </S.Content>
        <S.Content>
          <PasswordSection control={control} name={['password', 'password2']} />
          <Button disabled={!formState.isValid} type="submit">
            제출
          </Button>
        </S.Content>
      </Stepper>
    </S.Wrapper>
  );
};

export default SignUp;
