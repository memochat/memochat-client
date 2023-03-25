import styled from '@emotion/styled';

import { EmotionTheme } from '@src/shared/styles/themes';

import { TextFieldProps } from './TextField.types';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const getLabelColor = ({
  error,
  theme,
}: Pick<TextFieldProps, 'error'> & {
  theme: EmotionTheme;
}) => {
  return error ? theme.color.red1 : theme.color.purple1;
};

export const Label = styled.label<Pick<TextFieldProps, 'error'>>`
  color: ${(p) => getLabelColor(p)};
  ${(p) => p.theme.typography.body3};
`;

const getInputBorderBottomColor = ({
  error,
  success,
  isFocused,
  theme,
}: Pick<TextFieldProps, 'error' | 'success'> & { isFocused: boolean; theme: EmotionTheme }) => {
  if (error) {
    return theme.color.red1;
  }

  if (success || isFocused) {
    return theme.color.purple1;
  }

  return theme.color.gray3;
};

export const InputWrapper = styled.div<
  Pick<TextFieldProps, 'error' | 'success'> & { isFocused: boolean }
>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 8px;
  border-bottom: 1px solid ${(p) => getInputBorderBottomColor(p)};
`;

export const Input = styled.input`
  width: 100%;
  user-select: text;
  -webkit-user-select: text;

  color: ${(p) => p.theme.color.gray1};
  ${(p) => p.theme.typography.h4};

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

const getHelperMessageColor = ({
  error,
  success,
  theme,
}: Pick<TextFieldProps, 'error' | 'success'> & {
  theme: EmotionTheme;
}) => {
  if (error) {
    return theme.color.red1;
  }

  if (success) {
    return theme.color.purple1;
  }

  return theme.color.gray3;
};

export const MaxLength = styled.span`
  margin-left: 8px;

  color: ${(p) => p.theme.color.gray2};
  ${(p) => p.theme.typography.body4};
`;

export const HelperMessage = styled.p<Pick<TextFieldProps, 'error' | 'success'>>`
  margin-top: 3px;

  color: ${(p) => getHelperMessageColor(p)};
  ${(p) => p.theme.typography.body4};
`;
