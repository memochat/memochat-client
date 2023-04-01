import { RoomMemoFormType } from '@src/features/room/hooks/useMemoForm';
import { Chat } from '@src/shared/types/chat';

export interface RoomMemoFormProps {
  defaultValues?: RoomMemoFormType;
  roomId?: number;
  roomName?: string;
  showSelectedRoom?: boolean;
  onSubmit?: (
    chat: Pick<Chat, 'type' | 'message'> & { link?: string; roomId: number },
    reset?: () => void,
  ) => void;
}
