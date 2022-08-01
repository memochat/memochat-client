import { ButtonProps } from './Button.type';
import * as Styled from './Button.style';

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
