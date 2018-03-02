import React from 'react';
import propTypes from 'proptypes';
import Review from './review';

const Reviews = props => (
  <div>
    {props.reviews.map(review => (
      <Review review={review} />
    ))}
  </div>
);

Reviews.propTypes = {
  reviews: propTypes.arrayOf(propTypes.objects).isRequired,
};

export default Reviews;
