import ConfirmModal from '../ConfirmModal';

import useConfirm from '@src/hooks/useConfirm';

const GlobalConfirmModal = () => {
  const { onConfirm, onCancel, confirmState } = useConfirm();

  return (
    <ConfirmModal {...confirmState} onClose={onCancel} onConfirm={onConfirm} onCancel={onCancel} />
  );
};

export default GlobalConfirmModal;
