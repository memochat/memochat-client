export interface ConfirmModalProps {
  open: boolean;
  headerTitle?: string;
  title: string;
  description?: string;
  onClose: () => void;
  onCancel: () => void;
  onOk: () => void;
}
