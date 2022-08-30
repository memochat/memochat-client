import styled from '@emotion/styled';

import { SvgIconProps } from './Icon.types';

import * as icon from '@src/assets/icons';
import { ColorToken } from '@src/themes';

const DEFAULT_SIZE = 30;

const Icon = ({
  name,
  size = DEFAULT_SIZE,
  width,
  height,
  color: colorname,
  ...props
}: SvgIconProps) => {
  const SvgIcon = icon[name];

  const StyledSvgIcon = styled(SvgIcon)<
    Pick<SvgIconProps, 'size' | 'width' | 'height'> & { colorname: SvgIconProps['color'] }
  >`
    &,
    path {
      ${(p) => (p.colorname ? `fill: ${p.theme.color[colorname as ColorToken]} !important` : '')};
      width: ${width ?? `${size}px`};
      height: ${height ?? 'auto'};
    }
  `;

  return <StyledSvgIcon {...props} colorname={colorname} />;
};

export default Icon;
