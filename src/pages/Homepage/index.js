import React from 'react';
import './style.scss';

const index = () => (
  <>
    <section
      className="home-bg"
      style={{ height: '100vh' }}
      id="home"
      data-test="homeComponent"
    >
      <div className="container">
        <div className="text-center">
          <div className="pro_conditions">
            <ul>
              <li>Professional</li>
              <li>Reliable</li>
              <li>24 hours</li>
            </ul>
          </div>
          <h2 className="header_title">
            At banka we Love Making Things Amazing And Simple
          </h2>
          <p className="header_subtitle">
            Experience the ease of using our services, with off the chart
            professionalism and a whooping 24 hour service. In for a ride? get
            started now.
          </p>
        </div>
      </div>
    </section>
  </>
);

export default index;
