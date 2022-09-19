export interface ImageManageListItemProps {
  /** @default 'read' */
  mode?: 'read' | 'edit';
  imageSrc: string;
  imageAlt: string;
  isSelected?: boolean;
  onSelectChange?: (isSelected: boolean) => void;
}
