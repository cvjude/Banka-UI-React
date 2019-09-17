import { axoisInstance, setToken } from '../../../helpers';
import * as type from '../type';

export const getUserDetials = () => async (dispatch) => {
  try {
    const response = await axoisInstance.get(
      'user',
    );
    dispatch({
      type: type.GET_USER_DETAILS,
      payload: response.data,
    });
    return response;
  } catch (error) {
    dispatch({
      type: type.OPEN_TOAST,
      payload: {
        type: 'failure',
        message: 'An error Occured',
        open: true,
      },
    });
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await axoisInstance.post(
      'auth/signin', userData,
    );
    dispatch({
      type: type.LOGIN,
      payload: response.data,
    });
    const { token } = response.data.data;
    setToken(token);
    localStorage.setItem('banka', token);
    dispatch({
      type: type.OPEN_TOAST,
      payload: {
        type: 'success',
        message: 'Welcome back',
        open: true,
      },
    });
    return true;
  } catch (error) {
    dispatch({
      type: type.LOGINERROR,
      payload: error.response.data,
    });
    dispatch({
      type: type.OPEN_TOAST,
      payload: {
        type: 'failure',
        message: error.response.data.error,
        open: true,
      },
    });
  }
};

export const signUp = (userData) => async (dispatch) => {
  try {
    const response = await axoisInstance.post(
      'auth/signup', userData,
    );
    dispatch({
      type: type.SIGNUP,
      payload: response.data,
    });
    const { token } = response.data.data;
    setToken(token);
    localStorage.setItem('banka', token);
    dispatch({
      type: type.OPEN_TOAST,
      payload: {
        type: 'success',
        message: 'Welcome to Bankapp',
        open: true,
      },
    });
    return true;
  } catch (error) {
    dispatch({
      type: type.LOGINERROR,
      payload: error.response.data,
    });
    dispatch({
      type: type.OPEN_TOAST,
      payload: {
        type: 'failure',
        message: error.response.data.error,
        open: true,
      },
    });
  }
};
