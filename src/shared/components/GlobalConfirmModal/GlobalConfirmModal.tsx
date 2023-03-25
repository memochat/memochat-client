import useConfirm from '@src/shared/hooks/useConfirm';

import ConfirmModal from '../ConfirmModal';

const GlobalConfirmModal = () => {
  const { confirmState, onOk, onCancel } = useConfirm();

  return <ConfirmModal {...confirmState} onClose={onCancel} onOk={onOk} onCancel={onCancel} />;
};

export default GlobalConfirmModal;
