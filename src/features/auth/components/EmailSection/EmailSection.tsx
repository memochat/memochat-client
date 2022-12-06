import { useState } from 'react';
import { useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import usePostSendEmailMutation from '../../api/usePostSendEmailMutation';
import { EmailSectionProps } from './EmailSection.types';
import useVerificationsQuery from '../../api/useVerifications';

import { Button, TextField } from '@src/shared/components';
import { MemoChatError } from '@src/shared/types/api';
import { toast } from '@src/shared/utils/toast';

const EmailSection = (props: EmailSectionProps) => {
  const { control, name, handleEmailVerifyComplete } = props;
  const [isEmailVerificationSent, setIsEmailVerificationSent] = useState(false);
  const { field, fieldState } = useController({ control, name });
  const { t } = useTranslation();
  const [isCodeSent, setIsCodeSent] = useState(false);

  const { mutateAsync: mutateSendEmail } = usePostSendEmailMutation({
    onSuccess: () => {
      toast.success(t('emailLinkSent'));
      setIsCodeSent(true);
    },
    onError: (e) => {
      if (e instanceof MemoChatError) {
        toast.error(e.message);
        return;
      }
    },
  });

  const { refetch: checkIsEmailVerified } = useVerificationsQuery(
    { email: field.value },
    {
      enabled: false,
      retry: 0,
      onSuccess: () => {
        handleEmailVerifyComplete();
      },
      onError: (e) => {
        if (e instanceof MemoChatError) {
          toast.error(e.message);
          return;
        }
      },
    },
  );

  const handleEmailVerifyBtnClick = async () => {
    const { value } = field;
    await mutateSendEmail({ email: value });
    setIsEmailVerificationSent(true);
  };

  const handleIdNextBtnClick = async () => {
    await checkIsEmailVerified();
  };
  return (
    <>
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <TextField
          id={`id-textfield`}
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          disabled={isCodeSent}
          label="이메일"
          error={Boolean(fieldState.error)}
          errorMessage={fieldState.error?.message}
          success={fieldState.isDirty && !fieldState.error}
          successMessage="사용가능한 아이디입니다."
          helperMessage="최대 30자까지 입력 가능합니다."
          maxLength={30}
        />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            size="small"
            type="button"
            onClick={handleEmailVerifyBtnClick}
            style={{ width: '138px' }}
          >
            {isEmailVerificationSent ? '이메일 다시전송' : '이메일 인증하기'}
          </Button>
        </div>
      </div>
      <Button disabled={!isCodeSent} type="button" onClick={handleIdNextBtnClick}>
        계속
      </Button>
    </>
  );
};

export default EmailSection;
