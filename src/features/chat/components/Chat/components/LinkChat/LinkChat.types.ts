import { ReactNode } from 'react';

import { Chat } from '@src/shared/types/chat';

export interface LinkChatProps {
  message: ReactNode;
  createdAt: Date;
  onOpenContextMenu?: ({ x, y }: { x: number; y: number }) => void;
  link: {
    href: string;
    title: string;
    description: string;
    thumbnail: string;
  };
}
