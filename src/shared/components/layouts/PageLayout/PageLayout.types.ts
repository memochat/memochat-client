import { ReactNode } from 'react';

export interface PageLayoutProps {
  className?: string;
  topFixed?: ReactNode;
  children: ReactNode;
}
