import React from 'react';
import WriteReview from './writeReview';
import Reviews from './reviews';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <WriteReview id="write" />
        <Reviews id="reviews" />
      </div>
    );
  }
}

export default App;
