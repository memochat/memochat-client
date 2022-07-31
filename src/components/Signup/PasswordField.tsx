import { forwardRef } from 'react';
import { Control, useController } from 'react-hook-form';

import TextField from '@src/components/reusable/TextField';
import { SignUpFormType } from '@src/hooks/useSignupForm';

interface Props {
  control: Control<SignUpFormType, string>;
  name: 'password';
}

const PasswordField = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { control, name } = props;
  const { field, fieldState } = useController({
    control,
    name,
    rules: {
      required: { value: true, message: '필수값입니다.' },
      minLength: { value: 10, message: '최소 10자까지 입력 가능합니다.' },
      maxLength: { value: 20, message: '최대 20자까지 입력 가능합니다.' },
    },
  });

  return (
    <TextField
      ref={ref}
      type="password"
      name={name}
      id="password-textfield"
      value={field.value}
      onChange={field.onChange}
      label="비밀번호"
      error={Boolean(fieldState.error)}
      errorMessage={fieldState.error?.message}
      // TODO: useSignUpform에 validator 추가
      success={fieldState.isDirty && !fieldState.error}
      successMessage="사용가능한 비밀번호입니다."
      helperMessage="최대 20자까지 입력 가능합니다."
      maxLength={20}
    ></TextField>
  );
});
PasswordField.displayName = 'SignUpField';

export default PasswordField;
