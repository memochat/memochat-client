import { useRouter } from 'next/router';
import { Controller, SubmitHandler } from 'react-hook-form';

import * as S from './SignIn.styles';
import { SignInProps } from './SignIn.types';

import useSigninForm, { SigninFormType } from '@src/features/auth/hooks/useSigninForm';
import { Button, TextField } from '@src/shared/components';

const SignIn = ({}: SignInProps) => {
  const { control, formState, handleSubmit } = useSigninForm();

  const router = useRouter();

  const onSubmit: SubmitHandler<SigninFormType> = (values) => {
    alert(JSON.stringify(values, null, 2));
    router.push('/signin/complete');
  };

  return (
    <S.Wrapper as="form" onSubmit={handleSubmit(onSubmit)}>
      <S.Title>메모챗 로그인</S.Title>
      <S.FieldContainer>
        <Controller
          name="id"
          control={control}
          render={({ field }) => (
            <TextField
              maxLength={20}
              label="아이디"
              placeholder="아이디를 입력하세요."
              id="id-field"
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              maxLength={20}
              label="비밀번호"
              placeholder="비밀번호를 입력하세요."
              id="password-field"
              {...field}
            />
          )}
        />
      </S.FieldContainer>
      <Button disabled={!formState.isValid} type="submit">
        로그인
      </Button>
    </S.Wrapper>
  );
};

export default SignIn;
