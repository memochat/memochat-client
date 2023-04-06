import { MemoRoom } from '@src/shared/types/memoRooms';

export interface RoomListProps {
  data?: MemoRoom[];
  isLoading?: boolean;
  emptyComponent?: React.ReactNode;
  selectedRoom: MemoRoom | null;
  onSelectedRoomChange?: (selectedRoom: MemoRoom | null) => void;
}
