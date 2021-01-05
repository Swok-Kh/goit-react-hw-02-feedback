import React, { Component } from 'react';
import Section from './components/Section/Section';
// import PropTypes from 'prop-types';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback() {
    return this.state.bad + this.state.good + this.state.neutral;
  }
  countPositiveFeedbackPercentage() {
    return Math.floor((this.countTotalFeedback() / this.state.good) * 100);
  }
  render() {
    return (
      <div>
        <Section title="Test section component"></Section>
      </div>
    );
  }
}

App.propTypes = {};

export default App;
