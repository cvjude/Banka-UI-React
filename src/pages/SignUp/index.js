import React from 'react';
import SignUpForm from '../../components/SignUpForm';
import './style.scss';

const SignUp = () => (
  <section className="signup" data-test="signComponent">
    <div className="container">
      <div className="login-container">
        <div className="img text-center">
          <h2 className="header_title">Welcome to Banka</h2>
          <p className="header_subtitle">
            Sign up to continue
          </p>
        </div>
        <div className="form-container">
          <SignUpForm />
        </div>
      </div>
    </div>
  </section>
);

export default SignUp;
