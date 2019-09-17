import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Loginpage from './LoginPage';
import SignUp from './SignUp';
import Toaster from '../components/Toast';
import NavBar from '../components/NavBar';

const index = () => (
  <Router>
    <Toaster />
    <section data-test="appComponent">
      <NavBar />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/home" component={Homepage} />
      <Route exact path="/login" component={Loginpage} />
      <Route exact path="/signup" component={SignUp} />
    </section>
  </Router>
);

export default index;
