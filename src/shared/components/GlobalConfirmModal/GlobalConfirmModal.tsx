import ConfirmModal from '../ConfirmModal';

import useConfirm from '@src/shared/hooks/useConfirm';

const GlobalConfirmModal = () => {
  const { confirmState, onConfirm, onCancel } = useConfirm();

  return (
    <ConfirmModal {...confirmState} onClose={onCancel} onConfirm={onConfirm} onCancel={onCancel} />
  );
};

export default GlobalConfirmModal;
