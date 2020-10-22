import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

class LandingPage extends Component {
  state = {
    heading: 'Class Component',
  };

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <div className="container">
        <h2>{this.state.heading}</h2>

        <div className="grid">
          <div className="grid-col grid-col_8">
            <p>
              In automotive rally racing, drivers are timed against a clock in a
              race to the finish on dangerous roads all over the world. In order
              to go as fast as possible, drivers will have a co-driver. The
              co-drivers job is to call out turns before they happen, and assist
              with various tasks while on and off the road. In order to map out
              the road ahead, co-drivers will write pacenotes. Pacenotes are a
              complex set of instructions that explain what turn is coming up,
              the severity of said turn, and any other hazards along the way.
              SimplePacenotes aim is to simplify that process for new
              co-drivers, and lower the barrier to entry for new competitors.
            </p>
          </div>
          <div className="grid-col grid-col_4">
            <RegisterForm />

            <center>
              <h4>Already a Member?</h4>
              <button className="btn btn_sizeSm" onClick={this.onLogin}>
                Login
              </button>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
