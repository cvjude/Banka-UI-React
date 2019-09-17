import axios from 'axios';
import checkPropTypes from 'check-prop-types';

const APP_URL = 'https://jbankapp.herokuapp.com/api/v2/';
// const APP_URL = 'http://localhost:5001/api/v2/';

export const patterns = {
  email: /^(\s*[\w.-]+)@([a-zA-Z\d]{3,8})\.([a-z]{3,8}\s*)$/,
  password: /^\w{6,}$/,
  description: /^[a-zA-Z\d\s]{0,30}$/,
  firstName: /^[a-zA-Z]{3,}$/,
  lastName: /^[a-zA-Z]{3,}$/,
  signupEmail: /^([\w.-]+)@([a-zA-Z\d]{3,8})\.([a-z]{3,8})$/,
  signupPassword: /^\w{6,}$/,
  openingbalance: /^\d{3,}$/,
  amount: /^\d{1,}$/,
};

export const findByTestAttribute = (component, attribute) => component.find(`[data-test='${attribute}']`);

export const validate = (field, Regex) => !Regex.test(field);

export const axoisInstance = axios.create({
  baseURL: APP_URL,
});

export const setToken = (token) => {
  axoisInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};


export const checkProps = (component, propTypes, expectedProps) => {
  const propsErr = checkPropTypes(
    propTypes,
    expectedProps,
    'props',
    component.name,
  );
  return propsErr;
};
