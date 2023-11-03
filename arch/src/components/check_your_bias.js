import React from 'react';
import Navbar from './navbar'
import { Link } from 'react-router-dom';
import '../styles/check_your_bias.css'; 

class BiasCheckerPage extends React.Component {
  render() {
    return (
      <div className="bias-checker">
        <Navbar /> {/* Include the Navbar component here */}
        <h1>Check Your Bias</h1>
        <div className="button-container">
          <Link to = '/quiz_lgbtq+'>
            <CircularButton text="LGBTQ+" className = "lgbtq-button"/>
          </Link>
          <Link to = '/quiz_disability'>
            <CircularButton text="Disability" className = "disability-button"/>
          </Link>
          <Link to = '/quiz_BIPOC'>
            <CircularButton text="BIPOC" className = "BIPOC-button"/>
          </Link>
        </div>
      </div>
    );
  }
}

class CircularButton extends React.Component {
  render() {
    return (
      <div className="circular-button">
        <button>{this.props.text}</button>
      </div>
    );
  }
}

export default BiasCheckerPage;
