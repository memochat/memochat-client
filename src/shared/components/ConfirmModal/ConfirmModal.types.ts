export interface ConfirmModalProps {
  open: boolean;
  headerTitle?: string;
  title: string;
  description?: string;
  okVariant?: 'primary' | 'danger';
  onClose: () => void;
  onCancel: () => void;
  onOk: () => void;
}
