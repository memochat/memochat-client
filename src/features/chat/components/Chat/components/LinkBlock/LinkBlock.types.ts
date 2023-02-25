import { MouseEvent } from 'react';

export interface LinkBlockProps {
  href: string;
  thumbnail?: string;
  title?: string;
  description?: string;
  onContextMenu?: (e?: MouseEvent<HTMLDivElement>) => void;
}
