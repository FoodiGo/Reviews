import React from 'react';
import WriteReview from './writeReview';
import Reviews from './reviews';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [], // array of review objects
      restaurant: 'string',
    };
  }

  render() {
    return (
      <div>
        <WriteReview id="write" restaurant={this.state.restaurant} />
        <Reviews id="reviews" reviews={this.state.reviews} />
      </div>
    );
  }
}

export default App;
