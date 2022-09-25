import { NextPage } from 'next';
import { useState } from 'react';
import { Controller, SubmitHandler } from 'react-hook-form';

import * as S from './changepassword.styles';

import useChangePasswordForm, {
  ChangePasswordFormType,
} from '@src/features/settings/hooks/useChangePasswordForm';
import { Button, Stepper, TextField } from '@src/shared/components';
import useConfirm from '@src/shared/hooks/useConfirm';

const ChangePassword: NextPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { control, handleSubmit, getFieldState, formState } = useChangePasswordForm();
  const { confirm } = useConfirm();

  const handleIdNextBtnClick = () => {
    const { isDirty, error } = getFieldState('currentPassword');

    //TODO:패스워드 검증 필요

    if (isDirty && error) {
      //TODO: 나중에 에러 Alert수정
      confirm({
        headerTitle: '에러',
        title: '문제가 발생했습니다!',
        description: error.message || '',
      });
      return;
    }
    setActiveIndex((prev) => prev + 1);
  };

  const onSubmit: SubmitHandler<ChangePasswordFormType> = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <S.Wrapper as="form" onSubmit={handleSubmit(onSubmit)}>
      <S.Title>
        비밀번호 변경을 위해
        <br /> 현재 비밀번호를 입력해주세요.
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
              name="currentPassword"
              render={({ field, fieldState }) => (
                <TextField
                  id={`currentPassword-textfield`}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  label="현재 비밀번호(최대 20자)"
                  error={Boolean(fieldState.error)}
                  errorMessage={fieldState.error?.message}
                  success={fieldState.isDirty && !fieldState.error}
                  successMessage="비밀번호가 일치합니다."
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
                  label="변경할 비밀번호"
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
                  label="변경할 비밀번호 확인"
                  error={Boolean(fieldState.error)}
                  errorMessage={fieldState.error?.message}
                  success={fieldState.isDirty && !fieldState.error}
                  successMessage="비밀번호가 일치합니다."
                  maxLength={20}
                />
              )}
            />
          </div>
          <Button disabled={!formState.isValid} type="submit">
            변경
          </Button>
        </S.Content>
      </Stepper>
    </S.Wrapper>
  );
};

export default ChangePassword;
