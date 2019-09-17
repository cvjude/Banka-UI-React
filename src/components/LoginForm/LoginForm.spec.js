import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttribute } from '../../../helpers';
import { LoginForm } from './';

const setUp = (props) => shallow(<LoginForm {...props} />);

describe('Input component tests', () => {
  let expectedprops;
  describe('Checking propTypes', () => {
    it('should not throw a warning', () => {
      expectedprops = {
        userObject: {
          loginError: {
            error: '',
          },
        },
        login: jest.fn().mockReturnValueOnce(true),
        getDetails: jest.fn(),
        history: {
          push: jest.fn(),
        },
      };

      const propsErr = checkProps(LoginForm, LoginForm.PropTypes, expectedprops);

      expect(propsErr).toBeUndefined();
    });
  });

  describe('Should render with props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp(expectedprops);
    });

    it('should render without error', () => {
      const component = findByTestAttribute(wrapper, 'loginComponent');
      expect(component.length).toBe(1);
    });

    it('should call the handle change function', async () => {
      const e = {
        target: {
          name: 'email',
          value: 'not correct',
        },
      };
      const appInstance = wrapper.instance();
      appInstance.handleChange(e);
      expect(appInstance.state.email).toBe('not correct');
    });

    it('should call the handle submit method', async () => {
      const e = {
        preventDefault: jest.fn(),
        target: {
          name: 'email',
          value: 'not correct',
        },
      };
      const appInstance = wrapper.instance();
      appInstance.handleSubmit(e);
      expect(appInstance.state.clicked).toBe(true);
    });

    it('should call the component did update function for loginerror', async () => {
      const nextProps = {
        userObject: {
          loginError: {
            error: true,
          },
        },
      };
      const appInstance = wrapper.instance();
      appInstance.state.clicked = true;
      appInstance.componentWillUpdate(nextProps);
      expect(appInstance.state.clicked).toBe(false);
    });

    it('should call the component did update function for no loginerror', async () => {
      const nextProps = {
        userObject: {
          loginError: {
            error: false,
          },
        },
      };
      const appInstance = wrapper.instance();
      appInstance.state.clicked = true;
      appInstance.componentWillUpdate(nextProps);
      expect(appInstance.state.clicked).toBe(true);
    });
  });
});
