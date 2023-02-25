import { MouseEvent, ReactNode } from 'react';

export interface BaseChatProps {
  message: ReactNode;
  createdAt: Date;
  onContextMenu?: (e?: MouseEvent<HTMLDivElement>) => void;
}
