import React from 'react';
import User from './user';
import Button from './button';

const Review = props = (
  <div>
    <User className="users" />
    <div>
      <div>This will be the Review Rating (in stars)</div>
      <div>This will be the Review Date</div>
      <div>This will be the Review body</div>
      <div>Was this review ... ?</div>
      <Button className="useful button" />
      <Button className="funny button" />
      <Button className="cool button" />
    </div>
  </div>
);

export default Review;
