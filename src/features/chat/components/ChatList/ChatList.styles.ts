import styled from '@emotion/styled';

export const DateWrapper = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
`;

export const Date = styled.span`
  padding: 6px 10px;
  border-radius: 16px;
  color: ${(p) => p.theme.color.white};
  background-color: ${(p) => p.theme.color.blue3};
`;
