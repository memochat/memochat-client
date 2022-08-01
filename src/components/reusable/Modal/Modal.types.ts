import { ReactNode } from 'react';

export interface ModalProps {
  open: boolean;
  onClose: () => null;
  title: string;
  children: ReactNode;
  className?: string;
}
