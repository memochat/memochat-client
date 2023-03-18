import styled from '@emotion/styled';

export const Wrapper = styled.div<{ memoFormHeight?: number }>`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  padding: 0 0 16px;
`;

export const Date = styled.span`
  align-self: center;
  padding: 6px 10px;
  margin: 24px 0;
  border-radius: 16px;
  color: ${(p) => p.theme.color.white};
  background-color: ${(p) => p.theme.color.blue3};
`;
