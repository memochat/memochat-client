import { forwardRef } from 'react';
import { Control, useController } from 'react-hook-form';

import TextField from '@src/components/reusable/TextField';
import { SignUpFormType } from '@src/hooks/useSignupForm';

interface Props {
  control: Control<SignUpFormType, string>;
  name: Exclude<keyof SignUpFormType, 'id'>;
}

const PasswordField = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { control, name } = props;
  const { field, fieldState } = useController({
    control,
    name,
  });

  return (
    <TextField
      ref={ref}
      type="password"
      name={name}
      id={`${name}-textfield`}
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
    />
  );
});
PasswordField.displayName = 'SignUpField';

export default PasswordField;
