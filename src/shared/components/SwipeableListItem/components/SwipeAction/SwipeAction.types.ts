import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface SwipeActionProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  children: ReactNode;
}
