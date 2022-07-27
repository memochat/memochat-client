import styled from '@emotion/styled';

import { ButtonProps } from '.';

import { EmotionTheme } from '@src/themes';

const getHeightBySize = (size: ButtonProps['size']) => {
  return size === 'medium' ? '52px' : '40px';
};

const getTypographyBySize = ({
  size,
  theme,
}: {
  size: ButtonProps['size'];
  theme: EmotionTheme;
}) => {
  return size === 'medium' ? theme.typography.body2 : theme.typography.body5;
};

const getBackgroundColorByStatus = ({
  disabled,
  type,
  theme,
}: Pick<ButtonProps, 'disabled' | 'type'> & { theme: EmotionTheme }) => {
  if (disabled) {
    return theme.color.gray6;
  }

  return type === 'primary' ? theme.color.purple1 : theme.color.gray6;
};

const getColorByStatus = ({
  disabled,
  type,
  theme,
}: Pick<ButtonProps, 'disabled' | 'type'> & { theme: EmotionTheme }) => {
  if (disabled) {
    return type === 'primary' ? theme.color.gray3 : theme.color.gray4;
  }

  return type === 'primary' ? theme.color.white : theme.color.black1;
};

const PRIMARY_HOVER_BACKGROUND_COLOR = '#5D61D3';

const getHoverColorByType = ({
  type,
  theme,
}: Pick<ButtonProps, 'type'> & { theme: EmotionTheme }) => {
  return type === 'primary' ? PRIMARY_HOVER_BACKGROUND_COLOR : theme.color.gray5;
};

export const Button = styled.button<
  { buttonType: ButtonProps['type'] } & Pick<ButtonProps, 'size' | 'disabled'>
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
