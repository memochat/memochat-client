import styled from '@emotion/styled';

const PRIMARY_HOVER_BACKGROUND_COLOR = '#5D61D3';

type ButtonType = 'primary' | 'secondary';
type ButtonSize = 'small' | 'medium';

type ButtonProps = {
  children: string;
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
};

function Button({
  type = 'primary',
  size = 'medium',
  disabled,
  onClick = () => null,
  ...props
}: ButtonProps) {
  const handleClick = () => {
    if (disabled) return;

    onClick();
  };

  return (
    <Wrapper
      {...props}
      type="button"
      buttonType={type}
      size={size}
      disabled={disabled}
      onClick={handleClick}
    />
  );
}

const Wrapper = styled.button<
  Pick<ButtonProps, 'disabled' | 'size'> & { buttonType: ButtonProps['type'] }
>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${(p) => (p.size === 'medium' ? '5.2rem' : '4rem')};
  border-radius: 1.6rem;

  background-color: ${(p) =>
    p.disabled
      ? p.theme.color.gray6
      : p.buttonType === 'primary'
      ? p.theme.color.purple1
      : p.theme.color.gray6};
  color: ${(p) =>
    p.disabled
      ? p.buttonType === 'primary'
        ? p.theme.color.gray3
        : p.theme.color.gray4
      : p.buttonType === 'primary'
      ? p.theme.color.white
      : p.theme.color.black1};

  font-size: 1.4rem;
  font-weight: 400;

  ${(p) =>
    p.disabled
      ? ''
      : `&:hover { 
          background-color: ${
            p.buttonType === 'primary' ? PRIMARY_HOVER_BACKGROUND_COLOR : p.theme.color.gray5
          };
        }`}
`;

export default Button;
