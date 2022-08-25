import { ReactNode } from 'react';

export interface ModalLayoutProps {
  open: boolean;
  children?: ReactNode;
  onClose?: VoidFunction;
}
