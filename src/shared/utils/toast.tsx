import { toast as _toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const { info, success, warning, error } = _toast;

export const toast = {
  info,
  success,
  warning,
  error,
};
