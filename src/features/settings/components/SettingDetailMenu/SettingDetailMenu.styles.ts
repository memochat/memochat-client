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
  flex-grow: 1;
  text-align: left;
  font-style: normal;
  font-weight: 510;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.3px;
  color: #333333;
`;
