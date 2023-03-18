import { Chat } from '@src/shared/types/chat';

export interface RoomMemoFormProps {
  roomId?: number;
  roomName?: string;
  showSelectedRoom?: boolean;
  onSubmit?: (
    chat: Pick<Chat, 'type' | 'message'> & { link?: string; roomId: number },
    reset?: () => void,
  ) => void;
}
