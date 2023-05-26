import { ToastContainer as ToastContainerContainer } from 'react-toastify';

import { STATUS_BAR_HEIGHT } from '@src/shared/components/layouts/GlobalLayout/GlobalLayout.styles';

/**
 * 가능한 속성:
 * https://fkhadra.github.io/react-toastify/api/toast-container
 */
const ToastContainer = () => {
  return (
    <ToastContainerContainer
      position="top-center"
      hideProgressBar={true}
      newestOnTop={false}
      rtl={false}
      closeOnClick={true}
      pauseOnFocusLoss={true}
      draggable={true}
      style={{ position: 'fixed', top: STATUS_BAR_HEIGHT }}
    />
  );
};

export default ToastContainer;
