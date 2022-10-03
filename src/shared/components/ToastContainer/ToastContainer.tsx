import { ToastContainer as ToastContainerContainer } from 'react-toastify';

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
    />
  );
};

export default ToastContainer;
