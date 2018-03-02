import React from 'react';
import propTypes from 'proptypes';

const star = 'https://s3-us-west-1.amazonaws.com/foodigouserphotos/Star.png';

const Star = props => (
  <div className={props.addedClass !== '' ? `star ${props.type} ${props.addedClass}` : `star ${props.type}`}>
    <img className={props.addedClass !== '' ? `starImg ${props.addedClass}` : 'starImg'} src={star} alt="star img" />
  </div>
);

Star.propTypes = {
  type: propTypes.string.isRequired,
  addedClass: propTypes.string,
};

Star.defaultProps = {
  addedClass: '',
};

export default Star;
