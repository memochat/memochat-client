import styled from '@emotion/styled';

import Modal, { ModalButtonGroup } from '../Modal';
import Button from '../Button';

interface AlertProps {
  open: boolean;
  title: string;
  description: string;
  onClose: () => null;
  onCancel?: () => null;
  onOk?: () => null;
}

const Alert = ({
  open,
  title,
  description,
  onClose = () => null,
  onCancel = () => null,
  onOk = () => null,
}: AlertProps) => {
  const handleCancelClick = () => {
    onCancel();
    onClose();
  };

  const handleOkClick = () => {
    onOk();
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} title="알림">
      <Wrapper>
        <h2>{title}</h2>
        <p>{description}</p>
      </Wrapper>
      <ModalButtonGroup>
        <Button type="secondary" onClick={handleCancelClick}>
          취소
        </Button>
        <Button onClick={handleOkClick}>확인</Button>
      </ModalButtonGroup>
    </Modal>
  );
};

export default Alert;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2.6rem 1.6rem;
  text-align: center;
  white-space: pre-wrap;

  > h2 {
    margin-bottom: 0.6rem;
    font-weight: 500;
    font-size: 1.8rem;
    color: ${(p) => p.theme.color.black1};
  }

  > p {
    font-weight: 400;
    font-size: 1.2rem;
    color: ${(p) => p.theme.color.gray1};
  }
`;
