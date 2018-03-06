import React from 'react';
import propTypes from 'proptypes';

const star = 'https://s3-us-west-1.amazonaws.com/foodigouserphotos/Star.png';

const Star = props => (
  <div className={`rev_star ${props.type}`}>
    <img className={props.addedClass !== '' ? `rev_starImg ${props.addedClass}` : 'rev_starImg'} src={star} alt="star img" />
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
