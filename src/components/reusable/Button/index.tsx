import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

import * as Styled from './styled';

type ButtonType = 'primary' | 'secondary';
type ButtonSize = 'small' | 'medium';

type BaseButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export interface ButtonProps extends Omit<BaseButtonProps, 'children' | 'type'> {
  children: ReactNode;
  type?: ButtonType;
  htmlType?: BaseButtonProps['type'];
  size?: ButtonSize;
}

const Button = ({
  children,
  type = 'primary',
  htmlType = 'button',
  size = 'medium',
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <Styled.Button {...props} type={htmlType} buttonType={type} size={size} disabled={disabled}>
      {children}
    </Styled.Button>
  );
};

export default Button;
