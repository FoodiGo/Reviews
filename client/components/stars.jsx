import React from 'react';
import propTypes from 'proptypes';
import Star from './star';

const Stars = (props) => {
  const { rating } = props;
  const starArray = [];

  for (let i = 0; i < 5; i += 1) {
    if (i < rating) {
      starArray.push('selectedStar');
    } else {
      starArray.push('greyStar');
    }
  }

  return (
    <div className="starBox">
      {starArray.map(star => (
        <Star type={star} />
      ))}
    </div>
  );
};

Stars.propTypes = {
  rating: propTypes.number.isRequired,
};

export default Stars;
