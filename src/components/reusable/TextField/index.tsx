import { FC, ChangeEvent, InputHTMLAttributes, useState, FocusEvent, useCallback } from 'react';

/** @todo 지우기 */
// eslint-disable-next-line import/no-cycle
import * as Styled from './styled';

export interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'value' | 'type'> {
  value: string;
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

const TextField = ({
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
  onChange,
  onFocus,
  onBlur,
  ...props
}: TextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    },
    [onFocus],
  );

  const handleBlur = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    },
    [onBlur],
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value = '' } = e.target;

      if (maxLength && value.length > maxLength) {
        return;
      }

      onChange?.(e);
    },
    [maxLength, onChange],
  );

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
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {maxLength && <Styled.MaxLength>{`${value?.length || 0}/${maxLength}`}</Styled.MaxLength>}
      </Styled.InputWrapper>
      <Styled.HelperMessage error={error} success={success}>
        {getHelperMessage()}
      </Styled.HelperMessage>
    </Styled.Wrapper>
  );
};

export default TextField;
