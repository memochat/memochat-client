import { ChangeEvent, useState, FocusEvent, useCallback, forwardRef } from 'react';

import { TextFieldProps } from './TextField.types';
import * as Styled from './TextField.styles';

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
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
    },
    ref,
  ) => {
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
            ref={ref}
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
  },
);
TextField.displayName = 'TextField';

export default TextField;
