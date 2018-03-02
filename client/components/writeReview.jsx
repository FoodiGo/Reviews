import React from 'react';
import propTypes from 'proptypes';
import User from './user';

const WriteReview = props => (
  <div id="write">
    <User id="currentUser" />
    <div >
      <div>Stars Display</div>
      <div>Start Your Review of
        <span id="restName"> {props.restaurant}</span>
      </div>
    </div>
  </div>
);

WriteReview.propTypes = {
  restaurant: propTypes.string.isRequired,
};

export default WriteReview;
