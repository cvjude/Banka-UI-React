export default (state = [], action) => {
  switch (action.type) {
    case 'DUMMY':
      return action.payload;
    default:
      return state;
  }
};