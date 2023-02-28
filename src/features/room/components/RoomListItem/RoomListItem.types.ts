import { MemoRoomCategory } from '@src/shared/types/memoRooms';

export type RoomListItemProps = {
  name: string;
  roomCategory: MemoRoomCategory;
  isSelected: boolean;
  message?: string;
  className?: string;
  onSelect: () => void;
  onClick: () => void;
  onEdit: () => void;
  onDelete: () => void;
};
