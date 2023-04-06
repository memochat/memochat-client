import { MemoRoomCategory } from '@src/shared/types/memoRooms';

export type RoomListItemProps = {
  name: string;
  roomCategory: MemoRoomCategory;
  isSelected: boolean;
  message?: string;
  className?: string;
  onSelect: VoidFunction;
  onClick: VoidFunction;
  onEdit: VoidFunction;
  onDelete: VoidFunction;
};
