import React from 'react';
import WriteReview from './writeReview';
import Reviews from './reviews';
import helpers from '../ajaxHelpers/ajaxHelpers';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [], // array of review objects
      restaurant: 'string',
    };
    this.setReviews = this.setReviews.bind(this);
  }

  componentDidMount() {
    this.setReviews(101);
  }

  setReviews(restaurantId) {
    helpers.get(`/restaurants/${restaurantId}/reviews`, (data) => {
      this.setState({
        reviews: data,
        restaurant: data[0].restaurantName,
      });
    });
  }

  render() {
    return (
      <div>
        <WriteReview
          id="write"
          updateReviews={this.setReviews}
          restaurant={this.state.restaurant}
        />
        <Reviews id="reviews" reviews={this.state.reviews} />
      </div>
    );
  }
}

export default App;
