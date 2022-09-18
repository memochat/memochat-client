export interface LinkManageListItemProps {
  /** @default 'read' */
  mode?: 'read' | 'edit';
  title: string;
  imageSrc: string;
  imageAlt: string;
  isSelected?: boolean;
  onSelectChange?: (isSelected: boolean) => void;
}
