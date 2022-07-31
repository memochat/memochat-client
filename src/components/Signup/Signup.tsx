import { useState } from 'react';

import IdField from './IdField';
import PasswordField from './PasswordField';
import * as S from './Signup.styles';
import { signupProps } from './Signup.types';

import Button from '@src/components/reusable/Button';
import { Stepper } from '@src/components/reusable/Stepper';
import useSignupForm from '@src/hooks/useSignupForm';

const Signup = ({}: signupProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { control, handleSubmit, getFieldState } = useSignupForm();
  const handleIdNextBtnClick = (v: 'id' | 'password') => () => {
    const { isDirty, error } = getFieldState(v);
    if (isDirty && error) {
      //TODO: 나중에 에러 Alert수정
      alert(error.message);
      return;
    }
    setActiveIndex((prev) => prev + 1);
  };
  return (
    <S.Wrapper
      as="form"
      onSubmit={handleSubmit((e) => {
        console.log(e);
      })}
    >
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
          <IdField name="id" control={control}></IdField>
          <Button onClick={handleIdNextBtnClick('id')}>계속</Button>
        </S.Content>
        <S.Content>
          <PasswordField name="password" control={control}></PasswordField>
          <Button onClick={handleIdNextBtnClick('password')}>계속</Button>
        </S.Content>
        <S.Content>
          <Button type="submit" onClick={handleSubmit((v) => alert(JSON.stringify(v, null, 2)))}>
            제출
          </Button>
        </S.Content>
      </Stepper>
    </S.Wrapper>
  );
};

export default Signup;
