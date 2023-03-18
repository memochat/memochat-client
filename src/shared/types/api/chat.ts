import { Chat, ChatType } from '@src/shared/types/chat';

export type GetChats = {
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
