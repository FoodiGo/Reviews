import React from 'react';
import User from './user';
import Button from './button';

const Review = props => (
  <div>
    <User />
    <div className="reviewData">
      <div>This will be the Review Rating (in stars)</div>
      <div>This will be the Review Date</div>
      <div>This will be the Review body</div>
      <div>Was this review... ?</div>
      <Button className="useful" />
      <Button className="funny" />
      <Button className="cool" />
    </div>
  </div>
);

export default Review;
