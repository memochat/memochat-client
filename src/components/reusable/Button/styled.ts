import styled from '@emotion/styled';

import { ButtonProps } from '.';

import { EmotionTheme } from '@src/themes';

const getHeightBySize = (size: NonNullable<ButtonProps['size']>) => {
  return {
    small: '52px',
    medium: '40px',
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

interface getBackgroundColorByStatusProps extends Required<Pick<ButtonProps, 'disabled' | 'type'>> {
  theme: EmotionTheme;
}

const getBackgroundColorByStatus = ({ disabled, type, theme }: getBackgroundColorByStatusProps) => {
  if (disabled) {
    return theme.color.gray6;
  }

  return {
    primary: theme.color.purple1,
    secondary: theme.color.gray6,
  }[type];
};

interface getColorByStatusProps extends Required<Pick<ButtonProps, 'disabled' | 'type'>> {
  theme: EmotionTheme;
}

const getColorByStatus = ({ disabled, type, theme }: getColorByStatusProps) => {
  return {
    primary: disabled ? theme.color.gray3 : theme.color.white,
    secondary: disabled ? theme.color.gray4 : theme.color.black1,
  }[type];
};

const PRIMARY_HOVER_BACKGROUND_COLOR = '#5D61D3';

interface getHoverColorByType extends Required<Pick<ButtonProps, 'type'>> {
  theme: EmotionTheme;
}

const getHoverColorByType = ({ type, theme }: getHoverColorByType) => {
  return {
    primary: PRIMARY_HOVER_BACKGROUND_COLOR,
    secondary: theme.color.gray5,
  }[type];
};

export const Button = styled.button<
  { buttonType: NonNullable<ButtonProps['type']> } & Required<
    Pick<ButtonProps, 'size' | 'disabled'>
  >
>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${(p) => getHeightBySize(p.size)};
  border-radius: 16px;

  ${(p) => getTypographyBySize({ size: p.size, theme: p.theme })};

  background-color: ${(p) => getBackgroundColorByStatus({ ...p, type: p.buttonType })};
  color: ${(p) => getColorByStatus({ ...p, type: p.buttonType })};

  ${(p) =>
    p.disabled
      ? ''
      : `&:hover { 
            background-color: ${getHoverColorByType({ ...p, type: p.buttonType })};
          }`}
`;
