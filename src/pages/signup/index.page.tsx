import { useRouter } from 'next/router';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import useSendEmailMutation from '@src/features/auth/api/useSendEmailMutation';
import useSignUpMutation from '@src/features/auth/api/useSignUpMutation';
import useVerificationsQuery from '@src/features/auth/api/useVerifications';
import EmailSection from '@src/features/auth/components/EmailSection';
import GuestGuard from '@src/features/auth/components/GuestGuard';
import PasswordSection from '@src/features/auth/components/PasswordSection';
import useSignupForm, { SignUpFormType } from '@src/features/auth/hooks/useSignupForm';
import { Button, Stepper } from '@src/shared/components';
import { MemoChatError } from '@src/shared/types/api';
import { NextPageWithLayout } from '@src/shared/types/next';
import { toast } from '@src/shared/utils/toast';
import FloatingLayout from '@src/shared/components/layouts/FloatingLayout/FloatingLayout';

import * as S from './signup.styles';

const SignUp: NextPageWithLayout = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { control, handleSubmit, watch, formState } = useSignupForm();
  const router = useRouter();

  const { t } = useTranslation();
  const [isVerifyEmailSent, setIsVerifyEmailSent] = useState(false);
  const { mutateAsync: mutateSendEmail } = useSendEmailMutation({
    onSuccess: () => {
      toast.success(t('emailLinkSent'));
      setIsVerifyEmailSent(true);
    },
    onError: (e) => {
      setIsVerifyEmailSent(false);
      if (e instanceof MemoChatError) {
        toast.error(e.message);
        return;
      }
      if (e instanceof Error) {
        toast.error(e?.message);
        return;
      }
    },
  });

  const email = watch('email');

  const { refetch: checkIsEmailVerified } = useVerificationsQuery({
    variables: { email },
    enabled: false,
    onSuccess: () => {
      setActiveIndex((prev) => prev + 1);
    },
  });

  const { mutate: signUp } = useSignUpMutation({
    onSuccess: () => {
      toast.success('회원가입이 완료되었습니다. 로그인해주세요.');
      router.push('/signup/complete');
    },
  });

  const onEmailVerify = async (email: string) => {
    await mutateSendEmail({ email });
    setIsVerifyEmailSent(true);
  };

  const onCheckIsEmailVerified = () => {
    checkIsEmailVerified();
  };

  const onSubmit: SubmitHandler<SignUpFormType> = (values) => {
    const { email, password } = values;
    signUp({ email, password });
  };

  return (
    <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
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
          paddingBottom: '100px',
        }}
      >
        <S.Content>
          <EmailSection
            onEmailVerify={onEmailVerify}
            onCheckIsEmailVerified={onCheckIsEmailVerified}
            isVerifyEmailSent={isVerifyEmailSent}
            control={control}
            name="email"
          />
        </S.Content>
        <S.Content>
          <PasswordSection control={control} name={['password', 'password2']} />
          <FloatingLayout>
            <Button disabled={!formState.isValid} type="submit">
              가입
            </Button>
          </FloatingLayout>
        </S.Content>
      </Stepper>
    </S.Wrapper>
  );
};

export default SignUp;
