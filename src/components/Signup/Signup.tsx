import { useRouter } from 'next/router';
import { useState } from 'react';
import { Controller, SubmitHandler } from 'react-hook-form';

import TextField from '../reusable/TextField';
import * as S from './Signup.styles';
import { SignupProps } from './Signup.types';

import Button from '@src/components/reusable/Button';
import { Stepper } from '@src/components/reusable/Stepper';
import useSignupForm, { SignUpFormType } from '@src/hooks/useSignupForm';

const Signup = ({}: SignupProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { control, handleSubmit, getFieldState, formState } = useSignupForm();
  const [isDuplicates, setIsDuplicates] = useState(false);

  const router = useRouter();

  const handleIdNextBtnClick = () => {
    const { isDirty, error } = getFieldState('id');

    if (isDirty && error) {
      //TODO: 나중에 에러 Alert수정
      alert(error.message);
      return;
    }
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
          <div style={{ flexGrow: 1 }}>
            <Controller
              control={control}
              name="id"
              render={({ field, fieldState }) => (
                <TextField
                  id={`id-textfield`}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  label="아이디(최대 10자)"
                  error={Boolean(fieldState.error) || isDuplicates}
                  errorMessage={isDuplicates ? '중복된 아이디입니다.' : fieldState.error?.message}
                  success={fieldState.isDirty && !fieldState.error}
                  successMessage="사용가능한 아이디입니다."
                  helperMessage="최대 20자까지 입력 가능합니다."
                  maxLength={20}
                />
              )}
            />
          </div>
          <Button onClick={handleIdNextBtnClick}>계속</Button>
        </S.Content>
        <S.Content>
          <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <Controller
              control={control}
              name="password"
              render={({ field, fieldState }) => (
                <TextField
                  type="password"
                  id={`password-textfield`}
                  value={field.value}
                  onChange={field.onChange}
                  label="비밀번호"
                  error={Boolean(fieldState.error)}
                  errorMessage={fieldState.error?.message}
                  success={fieldState.isDirty && !fieldState.error}
                  successMessage="사용가능한 비밀번호입니다."
                  helperMessage="최대 20자까지 입력 가능합니다."
                  maxLength={20}
                />
              )}
            />
            <Controller
              control={control}
              name="password2"
              render={({ field, fieldState }) => (
                <TextField
                  type="password"
                  id={`password2-textfield`}
                  value={field.value}
                  onChange={field.onChange}
                  label="비밀번호"
                  error={Boolean(fieldState.error)}
                  errorMessage={fieldState.error?.message}
                  success={fieldState.isDirty && !fieldState.error}
                  successMessage="사용가능한 비밀번호입니다."
                  helperMessage="최대 20자까지 입력 가능합니다."
                  maxLength={20}
                />
              )}
            />
          </div>
          <Button disabled={!formState.isValid} type="submit">
            제출
          </Button>
        </S.Content>
      </Stepper>
    </S.Wrapper>
  );
};

export default Signup;
