import styled from '@emotion/styled';

import { ellipsis } from '@src/shared/styles';

import { HeaderProps } from './Header.types';

export const Wrapper = styled.header<{ hasBottomLine?: boolean }>`
  position: relative;
  background-color: white;
  height: 56px;
  width: 100%;
  text-align: center;
  padding: 18px 52px;
  ${(p) => (p.hasBottomLine ? `border-bottom: 1px solid ${p.theme.color.gray5};` : '')};

  z-index: ${({ theme }) => theme.zIndex.header};
`;

export const Title = styled.h1<Pick<HeaderProps, 'titleAlign'>>`
  ${({ theme }) => theme.typography.h3};
  color: ${({ theme }) => theme.color.black1};
  width: 100%;
  text-align: ${({ titleAlign }) => titleAlign};

  ${ellipsis(1)}
`;

export const ButtonsWrapper = styled.div<{ align: 'right' | 'left' }>`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  left: ${({ align }) => (align === 'left' ? '16px' : 'unset')};
  right: ${({ align }) => (align === 'right' ? '16px' : 'unset')};
  transform: translateY(-50%);

  ${({ align }) =>
    align === 'left'
      ? `
      > *:not(:first-of-type) {
        margin-left: 4px;
      }
      `
      : `
      > *:not(:last-child) {
        margin-right: 4px;
      }
      `};
`;
