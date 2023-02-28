export interface ChatContextMenuProps {
  isShow: boolean;
  top: number;
  left: number;
  onEdit: VoidFunction;
  onCopy: VoidFunction;
  onDelete: VoidFunction;
  onClose: VoidFunction;
}
