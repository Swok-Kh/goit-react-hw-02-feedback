import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './fedbackOption.module.scss';

class FeedbackOptions extends Component {
  render() {
    const {
      onLeaveFeedback,
      options: { good, neutral, bad },
    } = this.props;
    return (
      <div className={styles.wrapper}>
        <button
          className={styles.good}
          value={`{"good": ${good}}`}
          onClick={onLeaveFeedback}
        >
          Good
        </button>
        <button
          className={styles.neutral}
          value={`{"neutral": ${neutral}}`}
          onClick={onLeaveFeedback}
        >
          Neutral
        </button>
        <button
          className={styles.bad}
          value={`{"bad": ${bad}}`}
          onClick={onLeaveFeedback}
        >
          Bad
        </button>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default FeedbackOptions;
