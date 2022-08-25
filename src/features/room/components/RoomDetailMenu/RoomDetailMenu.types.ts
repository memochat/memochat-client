import { MouseEvent, ReactNode } from 'react';

export type RoomDetailVariant = 'default' | 'danger';

export interface RoomDetailMenuProps {
  title: string;
  count?: number;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  children?: ReactNode;
  variant?: RoomDetailVariant;
}
