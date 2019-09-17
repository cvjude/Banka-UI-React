const initialState = {
  user: {},
  loginError: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGINERROR':
      return {
        ...state,
        loginError: action.payload,
      };
    case 'GET_USER_DETAILS':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
