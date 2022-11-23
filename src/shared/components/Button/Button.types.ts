import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export type ButtonType = 'primary' | 'secondary' | 'danger';
export type ButtonSize = 'small' | 'medium';

type BaseButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export interface ButtonProps extends Omit<BaseButtonProps, 'children'> {
  children: ReactNode;
  variant?: ButtonType;
  size?: ButtonSize;
}
