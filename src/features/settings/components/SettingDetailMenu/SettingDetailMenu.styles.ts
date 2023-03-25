import styled from '@emotion/styled';
import Link from 'next/link';

export const Wrapper = styled(Link)`
  width: 100%;
  padding: 16px;
  display: flex;

  background-color: ${({ theme }) => theme.color.white};
  &:active {
    background-color: ${({ theme }) => theme.color.gray6};
  }
`;

export const Title = styled.p`
  margin: 0 6px;
  flex-grow: 1;
  text-align: left;
  font-style: normal;
  ${(p) => p.theme.typography.h4};
  color: ${(p) => p.theme.color.gray1};
`;
