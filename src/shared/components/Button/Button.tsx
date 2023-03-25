import Link from 'next/link';

import { ButtonProps, LinkButtonProps } from './Button.types';
import * as S from './Button.styles';

const DEFAULT_VARIANT = 'primary';
const DEFAULT_SIZE = 'medium';

const Button = ({
  children,
  variant = DEFAULT_VARIANT,
  size = DEFAULT_SIZE,
  type = 'button',
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <S.Button {...props} type={type} variant={variant} size={size} disabled={disabled}>
      {children}
    </S.Button>
  );
};

export default Button;

export const LinkButton = ({
  children,
  variant = DEFAULT_VARIANT,
  size = DEFAULT_SIZE,
  disabled = false,
  ...props
}: LinkButtonProps) => {
  return (
    <Link passHref {...props}>
      <S.LinkButton variant={variant} size={size} disabled={disabled}>
        {children}
      </S.LinkButton>
    </Link>
  );
};
