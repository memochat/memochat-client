import { useState } from 'react';
import { useController } from 'react-hook-form';

import { EmailSectionProps } from './EmailSection.types';

import { useSendEmailMutation } from '@src/queries/auth';
import { Button, TextField } from '@src/shared/components';

const EmailSection = (props: EmailSectionProps) => {
  const { control, name, handleEmailVerifyComplete } = props;
  const [isDuplicates, setIsDuplicates] = useState(false);
  const [isEmailVerificationSent, setIsEmailVerificationSent] = useState(false);
  const { field, fieldState } = useController({ control, name });

  const { mutate: mutateSendEmail } = useSendEmailMutation();

  const checkIfEmailDuplicates = async () => {
    try {
      //이메일 중복체크 api
      // if duplicates
      setIsDuplicates(false);
      return false;
    } catch (e) {
      console.error(e);
    }
  };

  const sendEmail = async () => {
    const { value } = field;
    try {
      await mutateSendEmail({ email: value });
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  const handleEmailVerifyBtnClick = async () => {
    const isDuplicates = await checkIfEmailDuplicates();
    if (isDuplicates) {
      return;
    }
    const isCodeSent = await sendEmail();
    if (!isCodeSent) {
      alert('이메일 전송에 실패했습니다. 다시 시도해주세요.');
      return;
    }
    setIsEmailVerificationSent(true);
  };

  const handleIdNextBtnClick = () => {
    const { isDirty, error } = fieldState;

    if (isDirty && error) {
      //TODO: 나중에 에러 Alert수정
      alert(error.message);
      return;
    }
    handleEmailVerifyComplete();
  };
  return (
    <>
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <TextField
          id={`id-textfield`}
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          label="이메일"
          error={Boolean(fieldState.error) || isDuplicates}
          errorMessage={isDuplicates ? '중복된 아이디입니다.' : fieldState.error?.message}
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
      <Button disabled={isDuplicates} type="button" onClick={handleIdNextBtnClick}>
        계속
      </Button>
    </>
  );
};

export default EmailSection;
