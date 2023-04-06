import { Chat } from '@src/shared/types/chat';

export interface ChatListProps {
  data?: Chat[];
  totalCount?: number;
  emptyComponent?: React.ReactNode;
  hasNextPage?: boolean;
  fetchNextPage?: () => void;
}
