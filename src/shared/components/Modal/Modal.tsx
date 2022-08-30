import ModalLayout from '../ModalLayout';
import { ModalProps } from './Modal.types';
import * as S from './Modal.styles';

const Modal = ({ open, onClose, title, children, className }: ModalProps) => {
  return (
    <ModalLayout open={open} onClose={onClose}>
      <S.Wrapper open={open} className={className}>
        <S.Title>{title}</S.Title>
        {children}
      </S.Wrapper>
    </ModalLayout>
  );
};

export default Modal;
