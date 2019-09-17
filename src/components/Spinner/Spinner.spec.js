import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute } from '../../../helpers';
import Spinner from './';

describe('Input component tests', () => {
  it('should render without error', () => {
    const wrapper = shallow(<Spinner />);
    const component = findByTestAttribute(wrapper, 'spinnerComponent');
    expect(component.length).toBe(1);
  });
});
