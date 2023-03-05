import styled from '@emotion/styled';

export const Form = styled.form`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  padding: 16px;
`;

export const ErrorHelperText = styled.p`
  color: ${({ theme }) => theme.color.red1};
  ${({ theme }) => theme.typography.body4}
  height: ${({ theme }) => theme.typography.body4.lineHeight};
`;
