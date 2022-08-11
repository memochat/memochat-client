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
  const { watch, control, handleSubmit, getFieldState, formState } = useSignupForm();
  const [isDuplicates, setIsDuplicates] = useState(false);
  const id = watch('id');

  const handleIdNextBtnClick = () => {
    const { isDirty, error } = getFieldState('id');

    if (isDirty && error) {
      //TODO: 나중에 에러 Alert수정
      alert(error.message);
      return;
    }
    setActiveIndex((prev) => prev + 1);
  };

  //쓰로틀로 아이디 중복체크

  return (
    <S.Wrapper as="form" onSubmit={handleSubmit((v) => alert(JSON.stringify(v, null, 2)))}>
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
            <IdField duplicates={isDuplicates} control={control} name="id" />
          </div>
          <Button onClick={handleIdNextBtnClick}>계속</Button>
        </S.Content>
        <S.Content>
          <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <PasswordField name="password" control={control} />
            <PasswordField name="password2" control={control} css={{ flexGrow: 1 }} />
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
