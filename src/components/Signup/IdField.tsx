import { forwardRef } from 'react';
import { Control, useController } from 'react-hook-form';

import TextField from '@src/components/reusable/TextField';
import { SignUpFormType } from '@src/hooks/useSignupForm';

interface Props {
  control: Control<SignUpFormType, string>;
  name: Extract<keyof SignUpFormType, 'id'>;
  duplicates?: boolean;
}

const IdField = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { control, name, duplicates } = props;
  const { field, fieldState } = useController({ control, name });

  return (
    <TextField
      ref={ref}
      name={name}
      id={`${name}-textfield`}
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      label="아이디(최대 10자)"
      error={Boolean(fieldState.error) || duplicates}
      errorMessage={duplicates ? '중복된 아이디입니다.' : fieldState.error?.message}
      success={fieldState.isDirty && !fieldState.error}
      successMessage="사용가능한 아이디입니다."
      helperMessage="최대 20자까지 입력 가능합니다."
      maxLength={20}
    />
  );
});
IdField.displayName = 'SignUpField';
export default IdField;
