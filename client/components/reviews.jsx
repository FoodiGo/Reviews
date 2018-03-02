import React from 'react';
import propTypes from 'proptypes';
import Review from './review';

const Reviews = props => (
  <div id="reviews">
    {props.reviews.map(review => (
      <Review key={review['_id']} review={review} updateReviews={props.updateReviews} /> // eslint-disable-line
    ))}
  </div>
);

Reviews.propTypes = {
  reviews: propTypes.arrayOf(propTypes.object).isRequired,
  updateReviews: propTypes.func.isRequired,
};

export default Reviews;
