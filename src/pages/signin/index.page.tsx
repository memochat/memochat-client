import { useRouter } from 'next/router';
import { Controller, SubmitHandler } from 'react-hook-form';

import { NextPageWithLayout } from '../_app.page';
import * as S from './signin.styles';

import GuestGuard from '@src/features/auth/components/GuestGuard';
import useSigninForm, { SigninFormType } from '@src/features/auth/hooks/useSigninForm';
import { Button, TextField } from '@src/shared/components';
import useAuth from '@src/features/auth/hooks/useAuth';

const SignIn: NextPageWithLayout = () => {
  const { control, formState, handleSubmit } = useSigninForm();
  const { login } = useAuth();
  const router = useRouter();

  const onSubmit: SubmitHandler<SigninFormType> = async (values) => {
    await login(values);
    // router.push('/signin/complete');
  };

  return (
    <S.Wrapper as="form" onSubmit={handleSubmit(onSubmit)}>
      {formState.isSubmitting && <div>loading</div>}
      <S.Title>메모챗 로그인</S.Title>
      <S.FieldContainer>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              maxLength={30}
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

SignIn.getLayout = (page) => <GuestGuard>{page}</GuestGuard>;

export default SignIn;
