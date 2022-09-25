import { ReactNode } from 'react';

export type HeaderProps = {
  title?: string;
  /** @default 'center' */
  titleAlign?: 'left' | 'center' | 'right';
  leftButtons?: ReactNode;
  rightButtons?: ReactNode;
  /** @default false */
  hasBottomLine?: boolean;
};
