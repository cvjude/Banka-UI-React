import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttribute } from '../../../helpers';
import Input from './';

const setUp = (props) => shallow(<Input {...props} />);

describe('Input component tests', () => {
  let expectedprops;
  describe('Checking propTypes', () => {
    it('should not throw a warning', () => {
      expectedprops = {
        title: '',
        handleChange: jest.fn(),
        val: '',
        errorMessage: '',
      };

      const propsErr = checkProps(Input, Input.PropTypes, expectedprops);

      expect(propsErr).toBeUndefined();
    });
  });

  describe('Should render with props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp(expectedprops);
    });

    it('should render without error', () => {
      const component = findByTestAttribute(wrapper, 'inputComponent');
      expect(component.length).toBe(1);
    });

    it('should call the handle change function for errors', async () => {
      const e = {
        target: {
          name: 'email',
          value: 'not correct',
        },
      };
      const appInstance = wrapper.instance();
      wrapper.find('[data-test="input"]').simulate('change', e);
      expect(appInstance.props.handleChange).toHaveBeenCalled();
    });

    it('should call the handle change function no errors', async () => {
      const e = {
        target: {
          name: 'password',
          value: 'thidpasss',
        },
      };
      const appInstance = wrapper.instance();
      wrapper.find('[data-test="input"]').simulate('change', e);
      expect(appInstance.props.handleChange).toHaveBeenCalled();
    });
  });
});
