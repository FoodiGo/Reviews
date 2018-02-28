import React from 'react';
import Review from './review';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Review className="reviews" />
        <Review className="reviews" />
      </div>
    );
  }
}

export default Reviews;
