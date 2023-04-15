export interface SwipeableListItemProps {
  children: (value?: { isSwiping: boolean; isTrailingActionsOpen: boolean }) => React.ReactNode;
  trailingActions: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
