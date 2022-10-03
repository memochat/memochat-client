import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const MenuList = styled.ul`
  width: 100%;
  padding-bottom: 76px;
`;

export const MenuListItem = styled.li`
  width: 100%;
  padding: 16px;
  display: flex;

  &:last-of-type {
    padding-top: 76px;
  }
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.body1};
  color: ${({ theme }) => theme.color.gray3};
  flex-grow: 1;
  text-align: left;
`;

export const P = styled.p`
  ${({ theme }) => theme.typography.h4};
  color: ${({ theme }) => theme.color.black1};
`;

export const Link = styled.a`
  ${({ theme }) => theme.typography.body1};
  color: ${({ theme }) => theme.color.purple1};
`;

export const DeleteButton = styled.button`
  all: unset;
  ${({ theme }) => theme.typography.body1};
  color: ${({ theme }) => theme.color.red1};
`;