import ConfirmModal from '../ConfirmModal';

import useConfirm from '@src/hooks/useConfirm';

const GlobalConfirmModal = () => {
  const { onConfirm, onCancel, confirmModalState } = useConfirm();

  return (
    <ConfirmModal
      {...confirmModalState}
      onClose={onCancel}
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default GlobalConfirmModal;
