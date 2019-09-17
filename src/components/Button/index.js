/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Spinner from '../Spinner';

export const Button = ({
  styles, type, label, handleSubmit, clicked,
}) => (
  <div className="btn-div" data-test="btnComponent">
    <button
      className="btn"
      type={type}
      style={styles}
      onClick={handleSubmit}
    >
      {clicked ? <Spinner label={label} />
        : <p>{label}</p>}
    </button>
  </div>
);

Button.propTypes = {
  styles: PropTypes.shape(),
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  clicked: PropTypes.bool,
  handleSubmit: PropTypes.func,
};
Button.defaultProps = {
  styles: '',
  label: '',
  clicked: false,
  handleSubmit: () => { },
};

export default Button;
