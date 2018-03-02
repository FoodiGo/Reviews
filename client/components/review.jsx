import propTypes from 'proptypes';
import moment from 'moment';
import React from 'react';
import User from './user';
import Button from './button';
import Stars from './stars';

const Review = props => (
  <div className="review">
    <User
      userName={props.review.userName}
      userPhoto={props.review.userPhoto}
      userLocation={props.review.userLocation}
    />
    <div className="reviewData">
      <div><Stars rating={props.review.rating} id={props.review['_id']} /></div>
      <div>{moment(props.review.date).format('M/D/YYYY')}</div>
      <div>{props.review.reviewBody}</div>
      <br />
      <div>Was this review... ?</div>
      <Button
        id={props.review['_id']} // eslint-disable-line
        restaurant={props.review.restaurant}
        score={props.review.useful}
        type="Useful"
      />
      <Button
        id={props.review['_id']} // eslint-disable-line
        restaurant={props.review.restaurant}
        score={props.review.funny}
        type="Funny"
      />
      <Button
        id={props.review['_id']} // eslint-disable-line
        restaurant={props.review.restaurant}
        score={props.review.cool}
        type="Cool"
      />
    </div>
  </div>
);

Review.propTypes = {
  review: propTypes.shape({
    _id: propTypes.string,
    restaurant: propTypes.number,
    userName: propTypes.string,
    userPhoto: propTypes.string,
    userLocation: propTypes.string,
    rating: propTypes.number,
    date: propTypes.string,
    reviewBody: propTypes.string,
    useful: propTypes.number,
    funny: propTypes.number,
    cool: propTypes.number,
  }).isRequired,
};

export default Review;
