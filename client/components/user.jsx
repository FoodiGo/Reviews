import React from 'react';
import propTypes from 'proptypes';

const User = props => (
  <div className={props.addedClass !== '' ? `users ${props.addedClass}` : 'users'}>
    <div className="userFlex">
      <div className="userLeft">
        <img alt={props.userName} className="userPhotos" src={props.userPhoto} />
      </div>
      <div className="userRight">
        <div className="userNames">{props.userName}</div>
        <div className="userLocations">{props.userLocation}</div>
      </div>
    </div>
    <div className="userActions">
      <div className="action">Share Review</div>
      <div className="action">Embed Review</div>
      <div className="action">Compliment</div>
      <div className="action">Send Message</div>
      <div className="action">Follow {props.userName}</div>
    </div>
  </div>
);

User.propTypes = {
  userName: propTypes.string,
  userPhoto: propTypes.string,
  userLocation: propTypes.string,
  addedClass: '',
};

User.defaultProps = {
  userName: '',
  userPhoto: 'https://s3-us-west-1.amazonaws.com/foodigouserphotos/DefaultUser.png',
  userLocation: '',
  addedClass: '',
};

export default User;
