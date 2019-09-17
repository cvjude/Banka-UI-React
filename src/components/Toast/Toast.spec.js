import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttribute } from '../../../helpers';
import { Toast } from './';

const setUp = (props) => shallow(<Toast {...props} />);

describe('Input component tests', () => {
  let expectedprops;
  describe('Checking propTypes', () => {
    it('should not throw a warning', () => {
      expectedprops = {
        close: jest.fn(),
        toasts: {
          type: '',
          message: '',
          open: false,
        },
      };

      const propsErr = checkProps(Toast, Toast.PropTypes, expectedprops);

      expect(propsErr).toBeUndefined();
    });
  });

  describe('Should render with props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp(expectedprops);
    });

    it('should render without error', () => {
      const component = findByTestAttribute(wrapper, 'toastComponent');
      expect(component.length).toBe(1);
    });

    it('should call the onDismissClick function', async () => {
      const appInstance = wrapper.instance();
      appInstance.onDismissClick();
      expect(appInstance.props.close).toHaveBeenCalled();
    });

    it('should call the component did update function for no loginerror', async () => {
      const nextProps = {
        toasts: {
          open: true,
        },
      };
      const appInstance = wrapper.instance();
      appInstance.state.opened = false;
      appInstance.componentWillUpdate(nextProps);
      expect(appInstance.state.opened).toBe(true);
    });

    it('should call the component did update function for no loginerror', async () => {
      const nextProps = {
        toasts: {
          open: true,
        },
      };
      const appInstance = wrapper.instance();
      appInstance.state.opened = true;
      await appInstance.componentWillUpdate(nextProps);
      expect(appInstance.state.opened).toBe(true);
    });
  });
});
