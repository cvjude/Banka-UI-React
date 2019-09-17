import React from 'react';
import LoginForm from '../../components/LoginForm';
import './style.scss';

const index = () => (
  <section className="signin" data-test="loginComponent">
    <div className="container">
      <div className="login-container">
        <div className="img text-center">
          <h2 className="header_title">Welcome back</h2>
          <p className="header_subtitle">
            Login to continue
          </p>
        </div>
        <div className="form-container">
          <LoginForm />
        </div>
      </div>
    </div>
  </section>
);

export default index;
