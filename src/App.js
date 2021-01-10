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
    return this.state.bad + this.state.good + this.state.neutral;
  }
  countPositiveFeedbackPercentage() {
    return this.countTotalFeedback() === 0
      ? 0
      : Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  }
  handleFeedback = e => {
    if (['good', 'neutral', 'bad'].includes(e.target.dataset.btnType))
      this.setState({
        [e.target.dataset.btnType]:
          this.state[`${e.target.dataset.btnType}`] + 1,
      });
  };
  render() {
    return (
      <Card>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.handleFeedback} />
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
