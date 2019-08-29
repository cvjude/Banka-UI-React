import React from 'react';
import Homepage from './Homepage';
import NavBar from '../components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const index = () => {
  return (
    <Router>
      <section data-test="appComponent">
        <NavBar />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/home" component={Homepage} />
      </section>
    </Router>
  );
};

export default index;
