import { AnchorHTMLAttributes, ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export type ButtonType = 'primary' | 'secondary' | 'danger';
export type ButtonSize = 'small' | 'medium';

export type BaseButtonProps = {
  children: ReactNode;
  variant?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
};

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  BaseButtonProps;

export type LinkButtonProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> &
  BaseButtonProps;
