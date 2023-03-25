import { useController } from 'react-hook-form';

import { Button, TextField } from '@src/shared/components';

import { EmailSectionProps } from './EmailSection.types';

const EmailSection = (props: EmailSectionProps) => {
  const { onEmailVerify, onCheckIsEmailVerified, isVerifyEmailSent, control, name } = props;
  const { field, fieldState } = useController({ control, name });

  const handleEmailVerifyBtnClick = () => {
    const { value } = field;
    onEmailVerify(value);
  };

  const handleIdNextBtnClick = async () => {
    onCheckIsEmailVerified(field.value);
  };
  return (
    <>
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <TextField
          id={`id-textfield`}
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          disabled={isVerifyEmailSent}
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
            disabled={Boolean(fieldState.error)}
            size="small"
            type="button"
            onClick={handleEmailVerifyBtnClick}
            style={{ width: '138px' }}
          >
            {isVerifyEmailSent ? '이메일 다시전송' : '이메일 인증하기'}
          </Button>
        </div>
      </div>
      <Button disabled={!isVerifyEmailSent} type="button" onClick={handleIdNextBtnClick}>
        계속
      </Button>
    </>
  );
};

export default EmailSection;
