import { useContext } from 'react';

import ConfirmContext from '@src/contexts/ConfirmContext';
import { CONFIRM_ACTION } from '@src/contexts/ConfirmContext/ConfirmContext.types';

let resolveCallback: (value: boolean) => void;
const useConfirm = () => {
  const [confirmState, dispatch] = useContext(ConfirmContext);

  const confirm = (payload: { headerTitle?: string; title: string; description?: string }) => {
    dispatch({
      type: CONFIRM_ACTION.OPEN_CONFIRM,
      payload,
    });
    return new Promise((res) => {
      resolveCallback = res;
    });
  };

  const closeConfirm = () => {
    dispatch({
      type: CONFIRM_ACTION.CLOSE_CONFIRM,
    });
  };

  const onConfirm = () => {
    closeConfirm();
    resolveCallback(true);
  };

  const onCancel = () => {
    closeConfirm();
    resolveCallback(false);
  };

  return { confirm, onConfirm, onCancel, confirmState };
};

export default useConfirm;
