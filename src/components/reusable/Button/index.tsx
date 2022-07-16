import styled from '@emotion/styled';

import { EmotionTheme } from '@src/themes';

const PRIMARY_HOVER_BACKGROUND_COLOR = '#5D61D3';

type ButtonType = 'primary' | 'secondary';
type ButtonSize = 'small' | 'medium';

type ButtonProps = {
  children: string;
  type?: ButtonType;
  htmlType?: 'submit' | 'button';
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
};

function Button({
  type = 'primary',
  htmlType = 'button',
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
      type={htmlType}
      buttonType={type}
      size={size}
      disabled={disabled}
      onClick={handleClick}
    />
  );
}

const getBackgroundColor = ({
  disabled,
  type,
  theme,
}: Pick<ButtonProps, 'disabled' | 'type'> & { theme: EmotionTheme }) => {
  if (disabled) {
    return theme.color.gray6;
  }

  return type === 'primary' ? theme.color.purple1 : theme.color.gray6;
};

const getColor = ({
  disabled,
  type,
  theme,
}: Pick<ButtonProps, 'disabled' | 'type'> & { theme: EmotionTheme }) => {
  if (disabled) {
    return type === 'primary' ? theme.color.gray3 : theme.color.gray4;
  }

  return type === 'primary' ? theme.color.white : theme.color.black1;
};

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

  background-color: ${(p) => getBackgroundColor({ ...p, type: p.buttonType })};
  color: ${(p) => getColor({ ...p, type: p.buttonType })};

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
