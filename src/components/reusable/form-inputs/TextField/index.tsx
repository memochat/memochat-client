import { ChangeEvent, InputHTMLAttributes, useState, FocusEvent } from 'react';
import styled from '@emotion/styled';

import { ColorTheme } from '@src/themes/types';

interface TextFieldProps
  extends Pick<
    InputHTMLAttributes<HTMLInputElement>,
    'placeholder' | 'maxLength' | 'onFocus' | 'onBlur' | 'type'
  > {
  className?: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
  id: string;
  label: string;
  /** @default 'text' */
  type?: 'text' | 'password';
  /** 에러 여부 */
  error?: boolean;
  errorMessage?: string;
  /** 성공 여부 */
  success?: boolean;
  successMessage?: string;
  helperMessage?: string;
}

type TextFieldStatus = 'error' | 'success' | 'default' | 'focused';

const getTextFieldStatus = ({
  error,
  success,
  isFocused,
}: Pick<TextFieldProps, 'error' | 'success'> & { isFocused: boolean }): TextFieldStatus => {
  if (error) return 'error';
  if (success) return 'success';
  return isFocused ? 'focused' : 'default';
};

function TextField({
  value,
  onChange,
  id,
  label,
  type = 'text',
  maxLength,
  className,
  onFocus = () => null,
  onBlur = () => null,
  error,
  errorMessage,
  success,
  successMessage,
  helperMessage,
  ...props
}: TextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleToggle = (input: boolean) => (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(input);

    if (input) {
      onFocus(e);
    } else {
      onBlur(e);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (maxLength && value.length > maxLength) {
      return;
    }

    onChange(value);
  };

  const status = getTextFieldStatus({ error, success, isFocused });

  const getHelperMessage = () => {
    if (error) return errorMessage;
    if (success) return successMessage;
    return helperMessage || '';
  };

  return (
    <Wrapper className={className}>
      <Label htmlFor={id} status={status}>
        {label}
      </Label>
      <InputWrapper status={status}>
        <Input
          {...props}
          type={type}
          id={id}
          value={value}
          onChange={handleChange}
          onFocus={handleToggle(true)}
          onBlur={handleToggle(false)}
        />
        {maxLength && <MaxLength>{`${value.length}/${maxLength}`}</MaxLength>}
      </InputWrapper>
      <HelperMessage status={status}>{getHelperMessage()}</HelperMessage>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const getStatusColor = ({ status, theme }: { status: TextFieldStatus; theme: ColorTheme }) => {
  return {
    default: theme.color.gray3,
    focused: theme.color.purple1,
    error: theme.color.red1,
    success: theme.color.green1,
  }[status];
};

const Label = styled.label<{ status: TextFieldStatus }>`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${(p) => (p.status === 'default' ? p.theme.color.purple1 : getStatusColor(p))};
`;

const InputWrapper = styled.div<{ status: TextFieldStatus }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.2rem 0.8rem;
  border-bottom: 0.1rem solid ${(p) => getStatusColor(p)};
`;

const Input = styled.input`
  width: 100%;

  font-size: 1.6rem;
  font-weight: 500;
  color: ${(p) => p.theme.color.gray1};

  &::placeholder,
  &::-webkit-input-placeholder,
  &:-ms-input-placeholder {
    color: ${(p) => p.theme.color.gray5};
  }

  /* Chrome autofill 스타일 제거, 커스텀 */
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-transition: background-color 9999s ease-out;
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    -webkit-text-fill-color: ${(p) => p.theme.color.gray1};
  }
`;

const MaxLength = styled.span`
  margin-left: 1.8rem;

  font-weight: 500;
  font-size: 1.2rem;
  color: ${(p) => p.theme.color.gray2};
`;

const HelperMessage = styled.p<{ status: TextFieldStatus }>`
  margin-top: 0.3rem;

  font-weight: 500;
  font-size: 1.2rem;
  color: ${(p) => getStatusColor(p)};
`;

export default TextField;
