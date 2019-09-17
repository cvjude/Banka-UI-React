import { shallow } from 'enzyme';
import React from 'react';
import App from './index';
import { findByTestAttribute } from '../../helpers';

const setUp = () => shallow(<App />);

describe('The app component tests', () => {
  let Wrapper;
  beforeEach(() => {
    Wrapper = setUp();
  });
  it('should render without errors', () => {
    const component = findByTestAttribute(Wrapper, 'appComponent');
    expect(component.length).toBe(1);
  });
});
