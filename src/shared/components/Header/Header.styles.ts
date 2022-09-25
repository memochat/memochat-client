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
  padding: 18px 52px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray5};
  gap: 16px;
  display: flex;

  z-index: ${({ theme }) => theme.zIndex.header};
`;

export const Title = styled.h1<Pick<HeaderProps, 'titleAlign'>>`
  ${({ theme }) => theme.typography.h3};
  color: ${({ theme }) => theme.color.black1};
  width: 100%;
  text-align: ${({ titleAlign }) => titleAlign};

  ${ellipsis(1)}
`;

export const IconButton = styled.button<{ align: 'right' | 'left' }>`
  position: absolute;
  left: ${({ align }) => (align === 'left' ? '16px' : 'unset')};
  right: ${({ align }) => (align === 'right' ? '16px' : 'unset')};
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

export const VirtualSpace = styled.div`
  width: 100%;
  height: ${HEADER_HEIGHT}px;
`;
