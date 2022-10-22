import { MemoRoomCategory } from '@src/shared/types/memoRooms';

/** @TODO api에 따라 변경될 여지 */
export type ChatType = 'text' | 'image' | 'video' | 'link';

export type RoomListItemProps = {
  name: string;
  roomCategory: MemoRoomCategory;
  isSelected: boolean;
  /** @Note : 마지막 채팅 타입에 따라 달라짐 (백에서 어떻게 보내줄지에 따라 달라질듯) */
  lastChat?: {
    /** @TODO api에 따라 변경될 여지 */
    type: ChatType;
    text?: string;
  };
  className?: string;
  onSelect: () => void;
  onClick: () => void;
  onEdit: () => void;
  onDelete: () => void;
};
