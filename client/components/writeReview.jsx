import React from 'react';
import propTypes from 'proptypes';
import User from './user';
import Stars from './stars';

const WriteReview = props => (
  <div id="write">
    <User addedClass="currUser" />
    <div id="writeBox">
      <Stars rating={0} addedClass="writeStar" />
      <div id="startReview">Start your review of
        <span id="restName"> {props.restaurant}</span>
      </div>
    </div>
  </div>
);

WriteReview.propTypes = {
  restaurant: propTypes.string.isRequired,
};

export default WriteReview;
