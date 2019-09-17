/* eslint-disable react/no-will-update-set-state */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser, getUserDetials } from '../../actions/User';
import Input from '../Input';
import Button from '../Button';
import './style.css';

const styles = {
  display: 'flex',
  margin: 'auto',
  width: '100px',
  height: '40px',
};

export class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    clicked: false,
  };

  componentWillUpdate(nextProps) {
    const { clicked } = this.state;
    if (nextProps.userObject.loginError.error && clicked) {
      this.setState({
        clicked: false,
      });
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      clicked: true,
    });
    const { login, history, getDetails } = this.props;
    const successfulLogin = await login(this.state);
    if (successfulLogin) {
      await getDetails();
      history.push('./');
    }
  }

  render() {
    const { email, password, clicked } = this.state;
    return (
      <form onSubmit={this.handleSubmit} data-test="loginComponent">
        <Input
          data-test="emailInput"
          title="email"
          val={email}
          handleChange={this.handleChange}
          errorMessage="email should follow the format yourname@example.com"
        />
        <Input
          data-test="passwordInput"
          title="password"
          val={password}
          handleChange={this.handleChange}
          errorMessage="Password should be at least 8 characters"
        />
        <Button
          styles={styles}
          type="submit"
          label="Login"
          clicked={clicked}
        />
      </form>
    );
  }
}

LoginForm.propTypes = {
  userObject: PropTypes.shape({
    loginError: PropTypes.shape({
      error: PropTypes.string,
    }),
  }).isRequired,
  login: PropTypes.func.isRequired,
  getDetails: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => {
  const {
    userObject,
  } = state;
  return { userObject };
};

export default connect(mapStateToProps, {
  login: loginUser,
  getDetails: getUserDetials,
})(withRouter(LoginForm));
