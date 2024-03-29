import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { EmotionTheme } from '@src/shared/styles/themes';

import { BaseButtonProps } from './Button.types';

const getHeightBySize = (size: NonNullable<BaseButtonProps['size']>) => {
  return {
    small: '40px',
    medium: '52px',
  }[size];
};

interface getTypographyBySizeProps {
  size: NonNullable<BaseButtonProps['size']>;
  theme: EmotionTheme;
}

const getTypographyBySize = ({ size, theme }: getTypographyBySizeProps) => {
  return {
    small: theme.typography.body5,
    medium: theme.typography.body2,
  }[size];
};

const PRIMARY_HOVER_BACKGROUND_COLOR = '#5D61D3';
const DANGER_HOVER_BACKGROUND_COLOR = '#D54C4C';

type getColorsByVariantProps = Required<Pick<BaseButtonProps, 'disabled' | 'variant'>> & {
  theme: EmotionTheme;
};

const getColorsByVariant = ({
  variant,
  disabled,
  theme,
}: getColorsByVariantProps): {
  color: string;
  backgroundColor: string;
  hoverColor: string;
} => {
  const { gray3, gray4, gray5, gray6, white, black1, purple1, red1 } = theme.color;

  switch (variant) {
    case 'primary':
      return {
        color: disabled ? gray3 : white,
        backgroundColor: disabled ? gray6 : purple1,
        hoverColor: PRIMARY_HOVER_BACKGROUND_COLOR,
      };
    case 'secondary':
      return {
        color: disabled ? gray4 : black1,
        backgroundColor: gray6,
        hoverColor: gray5,
      };
    case 'danger':
      return {
        color: disabled ? gray3 : white,
        backgroundColor: disabled ? gray6 : red1,
        hoverColor: DANGER_HOVER_BACKGROUND_COLOR,
      };
  }
};

const getColorCSS = (p: getColorsByVariantProps) => {
  const { backgroundColor, color, hoverColor } = getColorsByVariant(p);

  return `
  background-color: ${backgroundColor};
  color: ${color}; 

  ${
    p.disabled
      ? ''
      : `&:hover { 
            background-color: ${hoverColor};
        }`
  }
  `;
};

type StyledButtonProps = Required<Pick<BaseButtonProps, 'size' | 'disabled' | 'variant'>>;

const buttonStyles = (p: StyledButtonProps & { theme: EmotionTheme }) => css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${getHeightBySize(p.size)};
  border-radius: 16px;

  ${getTypographyBySize(p)};

  ${getColorCSS(p)}
`;

export const Button = styled.button<StyledButtonProps>`
  ${(p) => buttonStyles(p)}
`;

export const LinkButton = styled.span<StyledButtonProps>`
  ${(p) => buttonStyles(p)}

  ${(p) => p.disabled && `pointer-events: none;`}
`;
