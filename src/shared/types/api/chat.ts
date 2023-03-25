import { Chat, ChatType } from '@src/shared/types/chat';

export type GetChats = {
  param: {
    roomId: number;
    limit: number;
    offset: number;
  };
  res: Chat[];
};

export type CreateChat = {
  param: {
    type: ChatType;
    message: string;
    link?: string;
  };
  res: Chat;
};
