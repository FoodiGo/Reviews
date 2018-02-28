import React from 'react';
import User from './user';

const WriteReview = props => (
  <div>
    <User id="currentUser" />
    <div>
      <div>Stars Display</div>
      <div>Start Your Review of -Insert RestaurantName-</div>
    </div>
  </div>
);

export default WriteReview;
