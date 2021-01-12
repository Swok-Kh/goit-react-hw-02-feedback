import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOption';
import Section from './components/Section';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import Card from './components/Card';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;

    return bad + good + neutral;
  }
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    return total === 0 ? 0 : Math.floor((good / total) * 100);
  }
  handleFeedback = e => {
    const changed = JSON.parse(e.target.value);
    for (const key in changed) {
      if (Object.hasOwnProperty.call(changed, key)) {
        changed[key] += 1;
      }
    }
    this.setState(prevState => {
      const nextState = { ...prevState, ...changed };

      return nextState;
    });
  };
  render() {
    return (
      <Card>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Card>
    );
  }
}

export default App;
