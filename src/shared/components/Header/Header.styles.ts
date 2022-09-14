import styled from '@emotion/styled';

import { HeaderProps } from './Header.types';

import { ellipsis } from '@src/shared/styles';

const HEADER_HEIGHT = 56;

export const Wrapper = styled.header`
  background-color: white;
  position: fixed;
  top: 0;
  height: ${HEADER_HEIGHT + 'px'};
  width: 100%;
  text-align: center;
  padding: 18px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray5};
  gap: 16px;

  display: grid;
  grid-template-columns: minmax(20px, auto) 1fr minmax(20px, auto);

  z-index: 10000; //TODO: 테마값 적용할것
`;

export const Title = styled.h1<Pick<HeaderProps, 'titleAlign'>>`
  ${({ theme }) => theme.typography.h3};
  color: ${({ theme }) => theme.color.black1};
  text-align: ${({ titleAlign }) => titleAlign};

  ${ellipsis(1)}
`;

export const IconButton = styled.button`
  cursor: pointer;
  width: 20px;
  height: 20px;
`;
