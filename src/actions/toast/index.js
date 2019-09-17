import * as type from '../type';

export const openToast = (options) => ({
  payload: options,
  type: type.OPEN_TOAST,
});

export const closeToast = () => ({
  payload: { open: false },
  type: type.CLOSE_TOAST,
});
