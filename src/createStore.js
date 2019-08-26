import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';

const middleWares = [reduxThunk];

const createStoreWithReducers = applyMiddleware(...middleWares)(createStore);

export const store = createStoreWithReducers(rootReducer);
