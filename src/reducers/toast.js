/* eslint-disable no-unused-vars */

export default function toasts(state = {
  type: '',
  message: '',
  open: false,
}, action) {
  const { payload, type } = action;

  switch (type) {
    case 'OPEN_TOAST':
      return payload;

    case 'CLOSE_TOAST':
      return payload;

    default:
      return state;
  }
}
