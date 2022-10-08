import { SVGProps } from 'react';

import * as icon from '@src/assets/icons';
import { ColorToken } from '@src/shared/styles/themes';

export type IconNameType = keyof typeof icon;

export interface SvgIconProps extends SVGProps<SVGSVGElement> {
  name: IconNameType;
  size?: number;
  width?: string;
  height?: string;
  color?: ColorToken;
}
