import styled from '@emotion/styled';

export const Wrapper = styled.a`
  width: 100%;
  padding: 16px;
  display: flex;
  gap: 6px;
  background-color: ${({ theme }) => theme.color.white};
  &:active {
    background-color: ${({ theme }) => theme.color.gray6};
  }
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.body1};
  flex-grow: 1;
  text-align: left;
`;
