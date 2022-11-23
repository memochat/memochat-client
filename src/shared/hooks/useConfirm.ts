import { useContext } from 'react';

import ModalReducerContext, {
  ModalReducerState,
  MODAL_REDUCER_ACTION,
} from '@src/shared/contexts/ModalReducerContext';

let resolveCallback: (value: boolean) => void;

const useConfirm = () => {
  const [{ confirmState }, dispatch] = useContext(ModalReducerContext);

  const confirm = (payload: Omit<ModalReducerState['confirmState'], 'open'>): Promise<boolean> => {
    dispatch({
      type: MODAL_REDUCER_ACTION.OPEN_CONFIRM,
      payload,
    });
    return new Promise((resolve) => {
      resolveCallback = resolve;
    });
  };

  const closeConfirm = () => {
    dispatch({
      type: MODAL_REDUCER_ACTION.CLOSE_CONFIRM,
    });
  };

  const onOk = () => {
    closeConfirm();
    resolveCallback(true);
  };

  const onCancel = () => {
    closeConfirm();
    resolveCallback(false);
  };

  return { confirm, onOk, onCancel, confirmState };
};

export default useConfirm;
