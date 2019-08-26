import { shallow } from 'enzyme';
import React from 'react';
import NavBar from './index';
import { findByTestAttribute } from '../../../helpers';

const setUp = () => {
  return shallow(<NavBar />);
};

describe('The app component tests', () => {
  let Wrapper;
  beforeEach(() => {
    Wrapper = setUp();
  });

  it('should render without errors', () => {
    const component = findByTestAttribute(Wrapper, 'navbarComponent');
    expect(component.length).toBe(1);
  });

  it('should render a logo', () => {
    const component = findByTestAttribute(Wrapper, 'logoComponent');
    expect(component.length).toBe(1);
  });
});
