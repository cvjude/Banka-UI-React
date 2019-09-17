import { shallow } from 'enzyme';
import React from 'react';
import Homepage from './index';
import { findByTestAttribute } from '../../../helpers';

const setUp = () => shallow(<Homepage />);

describe('The app component tests', () => {
  let Wrapper;
  beforeEach(() => {
    Wrapper = setUp();
  });
  it('should render without errors', () => {
    const component = findByTestAttribute(Wrapper, 'signComponent');
    expect(component.length).toBe(1);
  });
});
