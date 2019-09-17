import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  openToast, closeToast,
} from './';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('Sign in actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });


  it('signs in a user successfully', () => {
    store.dispatch(openToast({}));
    expect(store.getActions()).toMatchSnapshot();
  });

  it('should error as expected', () => {
    store.dispatch(closeToast({}));

    expect(store.getActions()).toMatchSnapshot();
  });
});
