import { MemoRoom, MemoRoomCategory } from '@src/shared/types/memoRooms';

export type UpsertRoomDialogValue = {
  name: MemoRoom['name'];
  roomCategoryId: MemoRoomCategory['id'];
};

export type UpsertRoomDialogProps = {
  type: 'create' | 'update';
  open: boolean;
  selectedRoomId?: number;
  defaultValues?: UpsertRoomDialogValue;
  onClose: () => void;
};
