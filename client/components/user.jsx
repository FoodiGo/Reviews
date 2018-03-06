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
        <div className="userSpecials">
          <img alt="friends" className="userIcons" src="https://s3-us-west-1.amazonaws.com/foodigoiconlib/orangeFriendsIcon.png" />
          <div className="specialsCount">
            <span className="specialsNum">{props.userFriends}
            </span> friends
          </div>
        </div>
        <div className="userSpecials">
          <img alt="userReviews" className="userIcons" src="https://s3-us-west-1.amazonaws.com/foodigoiconlib/orangeStar.png" />
          <div className="specialsCount">
            <span className="specialsNum">{props.userReviews}
            </span> reviews
          </div>
        </div>
      </div>
    </div>
    <div className="userActions">
      <div className="actionLine">
        <img alt="" className="actionIcons" src="https://s3-us-west-1.amazonaws.com/foodigoiconlib/blueShareIcon.png" />
        <div className="action">Share Review</div>
      </div>
      <div className="actionLine">
        <img alt="" className="actionIcons" src="https://s3-us-west-1.amazonaws.com/foodigoiconlib/blueEmbedIcon.png" />
        <div className="action">Embed Review</div>
      </div>
      <div className="actionLine">
        <img alt="" className="actionIcons" src="https://s3-us-west-1.amazonaws.com/foodigoiconlib/blueCompliment.png" />
        <div className="action">Compliment</div>
      </div>
      <div className="actionLine">
        <img alt="" className="actionIcons" src="https://s3-us-west-1.amazonaws.com/foodigoiconlib/blueRoundMessage.png" />
        <div className="action">Send Message</div>
      </div>
      <div className="actionLine">
        <img alt="" className="actionIcons" src="https://s3-us-west-1.amazonaws.com/foodigoiconlib/blueFollowIcon.png" />
        <div className="action">Follow {props.userName}</div>
      </div>
    </div>
  </div>
);

User.propTypes = {
  userName: propTypes.string,
  userPhoto: propTypes.string,
  userLocation: propTypes.string,
  userFriends: propTypes.number,
  userReviews: propTypes.number,
  addedClass: propTypes.string,
};

User.defaultProps = {
  userName: '',
  userPhoto: 'https://s3-us-west-1.amazonaws.com/foodigouserphotos/DefaultUser.png',
  userLocation: '',
  userFriends: 0,
  userReviews: 0,
  addedClass: '',
};

export default User;
