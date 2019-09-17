import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttribute } from '../../../helpers';
import { NavBar } from './';

const setUp = (props) => shallow(<NavBar {...props} />);

describe('Navbar component tests', () => {
  let expectedprops;
  describe('Checking propTypes', () => {
    it('should not throw a warning', () => {
      expectedprops = {
        history: {
          location: {
            pathname: '/',
          },
        },
      };

      const propsErr = checkProps(NavBar, NavBar.PropTypes, expectedprops);

      expect(propsErr).toBeUndefined();
    });
  });

  describe('Should render with props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp(expectedprops);
    });

    it('should render without error', () => {
      const component = findByTestAttribute(wrapper, 'navbarComponent');
      expect(component.length).toBe(1);
    });
  });

  describe('Should render with different route', () => {
    let wrapper;
    beforeEach(() => {
      expectedprops.history.location.pathname = '/contact';
      wrapper = setUp(expectedprops);
    });

    it('should render without error', () => {
      const component = findByTestAttribute(wrapper, 'navbarComponent');
      expect(component.length).toBe(1);
    });
  });
});
