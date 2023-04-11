export interface SwipeableListItemProps {
  children: React.ReactNode;
  trailingActions: React.ReactNode;
  onSwipingChange?: (isSwiping: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
}
