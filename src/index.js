import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages';
import { Provider } from 'react-redux';
import { store } from './createStore';
import './style.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('index')
);
