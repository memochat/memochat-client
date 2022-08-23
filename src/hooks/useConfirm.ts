import { useContext } from 'react';

import GlobalReducerContext, { GLOBAL_REDUCER_ACTION } from '@src/contexts/GlobalReducerContext';

let resolveCallback: (value: boolean) => void;

const useConfirm = () => {
  const [state, dispatch] = useContext(GlobalReducerContext);

  const confirm = (payload: {
    headerTitle?: string;
    title: string;
    description?: string;
  }): Promise<boolean> => {
    dispatch({
      type: GLOBAL_REDUCER_ACTION.OPEN_CONFIRM,
      payload,
    });
    return new Promise((resolve) => {
      resolveCallback = resolve;
    });
  };

  const closeConfirm = () => {
    dispatch({
      type: GLOBAL_REDUCER_ACTION.CLOSE_CONFIRM,
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

  return { confirm, onConfirm, onCancel, confirmModalState: state.confirmModal };
};

export default useConfirm;
