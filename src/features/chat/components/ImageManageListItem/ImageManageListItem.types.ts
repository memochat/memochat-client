export interface ImageManageListItemProps {
  /** @default 'read' */
  mode?: 'read' | 'edit';
  imageSrc: string;
  isSelected?: boolean;
  onSelectChange?: (isSelected: boolean) => void;
  className?: string;
  size?: string;
}
