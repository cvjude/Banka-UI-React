import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttribute } from '../../../helpers';
import Button from './';


const setUp = (props = {}) => {
  const component = shallow(<Button {...props} />);
  return component;
};

describe('Button Component test', () => {
  let expectedprops;
  describe('Checking propTypes', () => {
    it('should not throw a warning', () => {
      expectedprops = {
        styles: {},
        type: 'button',
        label: '',
        clicked: false,
        handleSubmit: jest.fn(),
      };

      const propsErr = checkProps(Button, Button.PropTypes, expectedprops);

      expect(propsErr).toBeUndefined();
    });

    // it('should throw a warning', () => {
    //   expectedprops = {
    //     styles: {},
    //     type: 'button',
    //     label: '',
    //     clicked: jest.fn(),
    //     handleSubmit: jest.fn(),
    //   };

    //   const propsErr = checkProps(Button, Button.PropTypes, expectedprops);

    //   expect(propsErr);
    // });
  });

  describe('Should render with non cliked props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp(expectedprops);
    });

    it('should render without error', () => {
      const component = findByTestAttribute(wrapper, 'btnComponent');
      expect(component.length).toBe(1);
    });
  });

  describe('Should render with clicked props', () => {
    let wrapper;
    beforeEach(() => {
      expectedprops.clicked = true;
      wrapper = setUp(expectedprops);
    });

    it('should render without error', () => {
      const component = findByTestAttribute(wrapper, 'btnComponent');
      expect(component.length).toBe(1);
    });
  });
});
