import { MouseEvent } from 'react';

import { ColorTheme } from '@src/themes';

export interface RoomSectionProps {
  title: string;
  count?: number;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  images?: string[];
  color?: keyof ColorTheme;
}
