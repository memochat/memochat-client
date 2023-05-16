import { ReactNode } from 'react';

import { Chat } from '@src/shared/types/chat';

export interface BaseChatProps {
  message: ReactNode;
  createdAt: Date;
  onOpenContextMenu?: ({ x, y }: { x: number; y: number }) => void;
}
