import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

import * as Styled from './styled';

type ButtonType = 'primary' | 'secondary';
type ButtonSize = 'small' | 'medium';

type BaseButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export interface ButtonProps extends Omit<BaseButtonProps, 'children'> {
  children: ReactNode;
  variant?: ButtonType;
  size?: ButtonSize;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  type = 'button',
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <Styled.Button {...props} type={type} variant={variant} size={size} disabled={disabled}>
      {children}
    </Styled.Button>
  );
};

export default Button;
