import { ChatType } from '@src/shared/types/api/chat';

export interface ChatProps {
  /** default: 'Text' */
  type?: ChatType;
  message: string;
  createdAt: Date;
  link?: {
    href: string;
    title?: string;
    description?: string;
    thumbnail?: string;
  };
}
