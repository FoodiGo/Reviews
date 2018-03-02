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
    <div className={props.addedClass !== '' ? `starBox ${props.addedClass}` : 'starBox'}>
      {starArray.map(star => (
        <Star type={star} addedClass={props.addedClass} />
      ))}
    </div>
  );
};

Stars.propTypes = {
  rating: propTypes.number.isRequired,
  addedClass: propTypes.string,
};

Stars.defaultProps = {
  addedClass: '',
};

export default Stars;
