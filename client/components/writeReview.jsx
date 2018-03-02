import React from 'react';
import propTypes from 'proptypes';
import User from './user';

const WriteReview = props => (
  <div>
    <User
      id="currentUser"
      userName=""
      userPhoto=""
      userLocation="San Francisco, CA"
    />
    <div>
      <div>Stars Display</div>
      <div>Start Your Review of
        <span id="restName"> {props.restaurant}</span>
      </div>
    </div>
  </div>
);

WriteReview.propTypes = {
  restaurant: propTypes.string,
  restId: propTypes.number,
  updateReview: propTypes.func,
}.isRequired;

export default WriteReview;
