import { forwardRef } from 'react';
import { Control, useController } from 'react-hook-form';

import TextField from '@src/components/reusable/TextField';
import { SignUpFormType } from '@src/hooks/useSignupForm';

interface Props {
  control: Control<SignUpFormType, string>;
  name: 'id';
}

const IdField = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { control, name } = props;
  const { field, fieldState } = useController({
    control,
    name,
    rules: {
      required: { value: true, message: '필수값입니다.' },
      maxLength: { value: 20, message: '글자는 최대 20자까지 가능합니다.' },
      validate: {
        checkUrl: async (v) => {
          //TODO:validate api 넣기
          if (v === '1234') return '1234는 안되요';
        },
      },
    },
  });
  return (
    <TextField
      ref={ref}
      name={name}
      id="id-textfield"
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      label="아이디(최대 10자)"
      error={Boolean(fieldState.error)}
      errorMessage={fieldState.error?.message}
      success={fieldState.isDirty && !fieldState.error}
      successMessage="사용가능한 아이디입니다."
      helperMessage="최대 20자까지 입력 가능합니다."
      maxLength={20}
    ></TextField>
  );
});
IdField.displayName = 'SignUpField';
export default IdField;
