import { Chat } from '@src/shared/types/chat';

export interface RoomMemoEditFormValues {
  message: string;
  id: number;
  roomId: number;
}

export interface RoomMemoEditFormProps {
  defaultValues?: RoomMemoEditFormValues;
  onClose: () => void;
  onSubmit: (
    param: Pick<Chat, 'type' | 'message' | 'id'> & { link?: string; roomId: number },
  ) => void;
}
