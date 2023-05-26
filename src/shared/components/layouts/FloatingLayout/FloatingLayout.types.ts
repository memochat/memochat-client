import { ReactNode } from 'react';

export interface FloatingLayoutProps {
  className?: string;
  /** 배경색 (default: white) */
  backgroundColor?: 'white' | 'transparent';
  children: ReactNode;
}
