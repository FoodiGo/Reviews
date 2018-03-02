import React from 'react';
import propTypes from 'proptypes';

const User = props => (
  <div className="users">
    <div className="userLeft">
      <img alt={props.review.userName} className="userPhotos" src={props.review.userPhoto} />
    </div>
    <div className="userRight">
      <div className="userNames">{props.review.userName}</div>
      <div className="userLocations">{props.review.userLocation}</div>
    </div>
  </div>
);

User.propTypes = {
  review: propTypes.shape({
    userName: propTypes.string,
    userPhoto: propTypes.string,
    userLocation: propTypes.string,
  }).isRequired,
};

export default User;
