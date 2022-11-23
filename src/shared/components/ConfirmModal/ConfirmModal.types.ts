export interface ConfirmModalProps {
  open: boolean;
  headerTitle?: string;
  title: string;
  description?: string;
  variant?: 'primary' | 'danger';
  onClose: () => void;
  onCancel: () => void;
  onOk: () => void;
}
