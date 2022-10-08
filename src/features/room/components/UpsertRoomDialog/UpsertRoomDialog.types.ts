import { Room, RoomCategory } from '@src/shared/types/room';

export type UpsertRoomDialogValue = {
  name: Room['name'];
  roomCategoryId: RoomCategory['id'];
};

export type UpsertRoomDialogProps = {
  type: 'create' | 'update';
  defaultValue?: UpsertRoomDialogValue;
  open: boolean;
  onClose: () => void;
};
