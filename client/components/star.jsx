import React from 'react';
import propTypes from 'proptypes';

const star = 'https://s3-us-west-1.amazonaws.com/foodigouserphotos/Star.png';

const Star = props => (
  <div className={`star ${props.type}`}>
    <img className="starImg" src={star} alt="star img" />
  </div>
);

Star.propTypes = {
  type: propTypes.string.isRequired,
};

export default Star;
