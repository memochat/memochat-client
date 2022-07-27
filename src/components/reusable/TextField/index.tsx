import { ChangeEvent, InputHTMLAttributes, useState, FocusEvent, useCallback } from 'react';

/** @todo 지우기 */
// eslint-disable-next-line import/no-cycle
import * as Styled from './styled';

export interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'value' | 'onChange' | 'type'> {
  value: string;
  onChange: (value: string) => void;
  id: string;
  label: string;
  /** 타입 @default 'text' */
  type?: 'text' | 'password';
  /** 에러 여부 */
  error?: boolean;
  /** 에러 메시지 */
  errorMessage?: string;
  /** 성공 여부 */
  success?: boolean;
  /** 성공 메시지 */
  successMessage?: string;
  /** 안내 메시지 */
  helperMessage?: string;
}

function TextField({
  id,
  value,
  label,
  type = 'text',
  maxLength,
  className,
  error,
  errorMessage = '',
  success,
  successMessage = '',
  helperMessage = '',
  onChange = () => null,
  onFocus = () => null,
  onBlur = () => null,
  ...props
}: TextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleToggleFocus = useCallback(
    (input: boolean) => (e: FocusEvent<HTMLInputElement>) => {
      setIsFocused(input);

      if (input) {
        onFocus(e);
      } else {
        onBlur(e);
      }
    },
    [onFocus, onBlur],
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value = '' } = e.target;

    if (maxLength && value.length > maxLength) {
      return;
    }

    onChange(value);
  };

  const getHelperMessage = () => {
    if (error) {
      return errorMessage;
    }

    if (success) {
      return successMessage;
    }

    return helperMessage;
  };

  return (
    <Styled.Wrapper className={className}>
      <Styled.Label htmlFor={id} error={error}>
        {label}
      </Styled.Label>
      <Styled.InputWrapper error={error} success={success} isFocused={isFocused}>
        <Styled.Input
          {...props}
          id={id}
          value={value}
          type={type}
          maxLength={maxLength}
          onChange={handleChange}
          onFocus={handleToggleFocus(true)}
          onBlur={handleToggleFocus(false)}
        />
        {maxLength && <Styled.MaxLength>{`${value?.length || 0}/${maxLength}`}</Styled.MaxLength>}
      </Styled.InputWrapper>
      <Styled.HelperMessage error={error} success={success}>
        {getHelperMessage()}
      </Styled.HelperMessage>
    </Styled.Wrapper>
  );
}

export default TextField;
