import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <>
        <button data-btn-type="good" onClick={onLeaveFeedback}>
          Good
        </button>
        <button data-btn-type="neutral" onClick={onLeaveFeedback}>
          Neutral
        </button>
        <button data-btn-type="bad" onClick={onLeaveFeedback}>
          Bad
        </button>
      </>
    );
  }
}

FeedbackOptions.propTypes = {};

export default FeedbackOptions;
