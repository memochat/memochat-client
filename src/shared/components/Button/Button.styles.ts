import styled from '@emotion/styled';

import { ButtonProps } from './Button.types';

import { EmotionTheme } from '@src/shared/styles/themes';

const getHeightBySize = (size: NonNullable<ButtonProps['size']>) => {
  return {
    small: '40px',
    medium: '52px',
  }[size];
};

interface getTypographyBySizeProps {
  size: NonNullable<ButtonProps['size']>;
  theme: EmotionTheme;
}

const getTypographyBySize = ({ size, theme }: getTypographyBySizeProps) => {
  return {
    small: theme.typography.body5,
    medium: theme.typography.body2,
  }[size];
};

interface getBackgroundColorByStatusProps
  extends Required<Pick<ButtonProps, 'disabled' | 'variant'>> {
  theme: EmotionTheme;
}

const getBackgroundColorByStatus = ({
  disabled,
  variant,
  theme,
}: getBackgroundColorByStatusProps) => {
  if (disabled) {
    return theme.color.gray6;
  }

  return {
    primary: theme.color.purple1,
    secondary: theme.color.gray6,
    danger: theme.color.red1,
  }[variant];
};

interface getColorByStatusProps extends Required<Pick<ButtonProps, 'disabled' | 'variant'>> {
  theme: EmotionTheme;
}

const getColorByStatus = ({ disabled, variant, theme }: getColorByStatusProps) => {
  return {
    primary: disabled ? theme.color.gray3 : theme.color.white,
    secondary: disabled ? theme.color.gray4 : theme.color.black1,
    danger: disabled ? theme.color.gray3 : theme.color.white,
  }[variant];
};

const PRIMARY_HOVER_BACKGROUND_COLOR = '#5D61D3';
const DANGER_HOVER_BACKGROUND_COLOR = '#D54C4C';

interface getHoverColorByType extends Required<Pick<ButtonProps, 'variant'>> {
  theme: EmotionTheme;
}

const getHoverColorByType = ({ variant, theme }: getHoverColorByType) => {
  return {
    primary: PRIMARY_HOVER_BACKGROUND_COLOR,
    secondary: theme.color.gray5,
    danger: DANGER_HOVER_BACKGROUND_COLOR,
  }[variant];
};

type StyledButtonProps = Required<Pick<ButtonProps, 'size' | 'disabled' | 'variant'>>;

export const Button = styled.button<StyledButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${(p) => getHeightBySize(p.size)};
  border-radius: 16px;

  ${(p) => getTypographyBySize(p)};

  background-color: ${(p) => getBackgroundColorByStatus(p)};
  color: ${(p) => getColorByStatus(p)};

  ${(p) =>
    p.disabled
      ? ''
      : `&:hover { 
            background-color: ${getHoverColorByType(p)};
          }`}
`;
