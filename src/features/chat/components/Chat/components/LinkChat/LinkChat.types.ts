import { MouseEvent, ReactNode } from 'react';

export interface LinkChatProps {
  message: ReactNode;
  createdAt: Date;
  onContextMenu?: (e?: MouseEvent<HTMLDivElement>) => void;
  link: {
    href: string;
    title: string;
    description: string;
    thumbnail: string;
  };
}
