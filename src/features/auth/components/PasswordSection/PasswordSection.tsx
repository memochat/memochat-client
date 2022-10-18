import { useController } from 'react-hook-form';

import { PasswordSectionProps } from './PasswordSection.types';

import { TextField } from '@src/shared/components';

const PasswordSection = (props: PasswordSectionProps) => {
  const { control, name } = props;
  const { field: passwordField, fieldState: passwordFieldState } = useController({
    control,
    name: name[0],
  });

  const { field: password2Field, fieldState: password2FieldState } = useController({
    control,
    name: name[1],
  });

  return (
    <>
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <TextField
          type="password"
          id={`password-textfield`}
          value={passwordField.value}
          onChange={passwordField.onChange}
          label="비밀번호"
          error={Boolean(passwordFieldState.error)}
          errorMessage={passwordFieldState.error?.message}
          success={passwordFieldState.isDirty && !passwordFieldState.error}
          successMessage="사용가능한 비밀번호입니다."
          helperMessage="최대 20자까지 입력 가능합니다."
          maxLength={20}
        />
        <TextField
          type="password"
          id={`password2-textfield`}
          value={password2Field.value}
          onChange={password2Field.onChange}
          label="비밀번호"
          error={Boolean(password2FieldState.error)}
          errorMessage={password2FieldState.error?.message}
          success={password2FieldState.isDirty && !password2FieldState.error}
          successMessage="사용가능한 비밀번호입니다."
          helperMessage="최대 20자까지 입력 가능합니다."
          maxLength={20}
        />
      </div>
    </>
  );
};

export default PasswordSection;
