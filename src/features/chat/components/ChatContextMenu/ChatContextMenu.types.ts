export interface ChatContextMenuProps {
  isOpen: boolean;
  top: number;
  left: number;
  onClose: VoidFunction;
  onEdit?: VoidFunction;
  onCopy?: VoidFunction;
  onDelete?: VoidFunction;
}
