import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { patterns, validate } from '../../../helpers';
import './style.css';

class Input extends Component {
  state = {
    error: '',
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    const error = validate(value, patterns[name]);
    this.setState({
      error: error ? 'invalid' : 'valid',
    });
    const { handleChange } = this.props;
    handleChange(event);
  };

  render() {
    const { val, title, errorMessage } = this.props;
    const { error } = this.state;
    return (
      <div data-test="inputComponent" className="input-div">
        <input
          data-test="input"
          className={`input ${error}`}
          value={val}
          type="text"
          name={title}
          onChange={this.handleInputChange}
          required
        />
        <label className="form-label" htmlFor={title}>{title.charAt(0).toUpperCase() + title.slice(1)}</label>
        <div className="error">{errorMessage}</div>
      </div>
    );
  }
}

Input.propTypes = {
  title: PropTypes.string,
  handleChange: PropTypes.func,
  val: PropTypes.string,
  errorMessage: PropTypes.string.isRequired,
};
Input.defaultProps = {
  title: null,
  handleChange: () => { },
  val: null,
};
export default Input;
