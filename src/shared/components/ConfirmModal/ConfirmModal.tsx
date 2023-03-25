import Modal, { ModalButtonGroup } from '../Modal';
import Button from '../Button';

import { ConfirmModalProps } from './ConfirmModal.types';
import * as S from './ConfirmModal.styles';

const ConfirmModal = ({
  open,
  headerTitle = '알림',
  title,
  description,
  variant = 'primary',
  onClose,
  onCancel,
  onOk,
}: ConfirmModalProps) => {
  return (
    <Modal open={open} onClose={onClose} title={headerTitle}>
      <S.ModalContents>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.ModalContents>
      <ModalButtonGroup>
        <Button variant="secondary" onClick={onCancel}>
          취소
        </Button>
        <Button variant={variant} onClick={onOk}>
          확인
        </Button>
      </ModalButtonGroup>
    </Modal>
  );
};

export default ConfirmModal;
