import { MouseEvent } from 'react';

import { ChatType } from '@src/shared/types/chat';

export type ChatProps = {
  /** default: 'Text' */
  type?: ChatType;
  message?: string;
  createdAt: Date;
  link?: {
    href: string;
    title?: string;
    description?: string;
    thumbnail?: string;
  };
  imageUrls?: string[];
  onContextMenu?: (e?: MouseEvent<HTMLDivElement>) => void;
};
