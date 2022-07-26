import { SVGProps } from 'react';
import styled from '@emotion/styled';

import * as icon from '@src/assets/icons';
import { ColorTheme } from '@src/themes';

export type IconNameType = keyof typeof icon;
export type ColorThemeNameType = keyof ColorTheme;

const DEFAULT_SIZE = 30;

interface SvgIconProps extends SVGProps<SVGSVGElement> {
  name: IconNameType;
  size?: number;
  width?: string;
  height?: string;
  color?: ColorThemeNameType;
}

const Icon = ({
  name,
  size = DEFAULT_SIZE,
  width,
  height,
  color: colorName,
  ...props
}: SvgIconProps) => {
  const SvgIcon = icon[name];

  const StyledSvgIcon = styled(SvgIcon)<
    Pick<SvgIconProps, 'size' | 'width' | 'height'> & { colorName: SvgIconProps['color'] }
  >`
    &,
    path {
      ${(p) =>
        p.colorName ? `fill: ${p.theme.color[colorName as ColorThemeNameType]} !important` : ''};
      width: ${width ?? `${size}px`};
      height: ${height ?? 'auto'};
    }
  `;

  return <StyledSvgIcon {...props} colorName={colorName} />;
};

export default Icon;
