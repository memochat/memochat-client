import { Chat } from '@src/shared/types/chat';

export interface ChatListProps {
  data?: Chat[];
  emptyComponent?: React.ReactNode;
  hasNextPage?: boolean;
  fetchNextPage?: () => void;
}
