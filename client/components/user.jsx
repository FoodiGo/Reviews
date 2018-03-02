import React from 'react';
import propTypes from 'proptypes';

const User = props => (
  <div className="users">
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
      <div>Share Review</div>
      <div>Embed Review</div>
    </div>
  </div>
);

User.propTypes = {
  userName: propTypes.string,
  userPhoto: propTypes.string,
  userLocation: propTypes.string,
};

User.defaultProps = {
  userName: '',
  userPhoto: '',
  userLocation: 'San Francisco, CA',
};

export default User;
