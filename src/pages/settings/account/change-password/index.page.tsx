import { useState } from 'react';
import { Controller, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';

import * as S from './changepassword.styles';

import AuthGuard from '@src/features/auth/components/AuthGuard';
import usePatchChangePasswordMutation from '@src/features/settings/api/usePatchPasswordMutation';
import useChangePasswordForm, {
  ChangePasswordFormType,
} from '@src/features/settings/hooks/useChangePasswordForm';
import useCheckPasswordForm, {
  CheckPasswordFormType,
} from '@src/features/settings/hooks/useCheckPasswordForm';
import { Button, Stepper, TextField } from '@src/shared/components';
import { MemoChatError } from '@src/shared/types/api';
import { NextPageWithLayout } from '@src/shared/types/next';
import { toast } from '@src/shared/utils/toast';

const ChangePassword: NextPageWithLayout = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const checkPasswordFormProps = useCheckPasswordForm();
  const changePasswordFormProps = useChangePasswordForm();
  const { isLoading, mutate } = usePatchChangePasswordMutation({
    onSuccess: () => {
      toast.success('변경에 성공했습니다');
      router.replace('/settings/account');
    },
    onError: (e) => {
      if (e instanceof MemoChatError) {
        toast.error(e.message);
        return;
      }
      toast.error('변경에 실패했습니다');
    },
  });

  const onCheckPasswordFormSubmit: SubmitHandler<CheckPasswordFormType> = async (data) => {
    setActiveIndex((p) => p + 1);
  };
  const onChangePasswordSubmit: SubmitHandler<ChangePasswordFormType> = async (data) => {
    mutate(data);
  };

  return (
    <S.Wrapper>
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
        <S.Content
          as="form"
          onSubmit={checkPasswordFormProps.handleSubmit(onCheckPasswordFormSubmit)}
        >
          <div style={{ flexGrow: 1 }}>
            <Controller
              control={checkPasswordFormProps.control}
              name="currentPassword"
              render={({ field, fieldState }) => (
                <>
                  <TextField
                    id={`currentPassword-textfield`}
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    label="현재 비밀번호(최대 20자)"
                    error={Boolean(fieldState.error)}
                    errorMessage={fieldState.error?.message}
                    success={fieldState.isDirty && !fieldState.error}
                    maxLength={20}
                  />
                </>
              )}
            />
          </div>
          <Button type="submit">계속</Button>
        </S.Content>
        <S.Content
          as="form"
          onSubmit={changePasswordFormProps.handleSubmit(onChangePasswordSubmit)}
        >
          <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <Controller
              control={changePasswordFormProps.control}
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
              control={changePasswordFormProps.control}
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
          <Button disabled={!changePasswordFormProps.formState.isValid && isLoading} type="submit">
            변경
          </Button>
        </S.Content>
      </Stepper>
    </S.Wrapper>
  );
};

ChangePassword.getLayout = (page) => <AuthGuard>{page}</AuthGuard>;

export default ChangePassword;
