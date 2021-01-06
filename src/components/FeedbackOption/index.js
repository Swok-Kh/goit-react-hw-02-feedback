import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './fedbackOption.module.scss';

class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback } = this.props;
    return (
      <div className={styles.wrapper}>
        <button
          className={styles.good}
          data-btn-type="good"
          onClick={onLeaveFeedback}
        >
          Good
        </button>
        <button
          className={styles.neutral}
          data-btn-type="neutral"
          onClick={onLeaveFeedback}
        >
          Neutral
        </button>
        <button
          className={styles.bad}
          data-btn-type="bad"
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
};

export default FeedbackOptions;
