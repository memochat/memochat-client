import { ReactNode } from 'react';

export interface BottomSheetProps {
  open: boolean;
  title: string;
  children: ReactNode;
}
