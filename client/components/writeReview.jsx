import React from 'react';
import propTypes from 'proptypes';
import User from './user';
import Stars from './stars';

const WriteReview = props => (
  <div id="rev_write">
    <User addedClass="rev_currUser" />
    <div id="rev_writeBox">
      <Stars rating={0} addedClass="rev_writeStar" revId="rev-writeBox" />
      <div id="rev_startReview">Start your review of
        <span id="rev_restName"> {props.restaurant}</span>
      </div>
    </div>
  </div>
);

WriteReview.propTypes = {
  restaurant: propTypes.string.isRequired,
};

export default WriteReview;
