import React from 'react';
import WriteReview from './writeReview';
import Reviews from './reviews';
import helpers from '../ajaxHelpers/ajaxHelpers';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      restaurant: 'string',
      restId: 'number',
    };
    this.setReviews = this.setReviews.bind(this);
  }

  componentDidMount() {
    this.setReviews(187);
  }

  setReviews(restaurantId) {
    helpers.get(`/restaurants/${restaurantId}/reviews`, (data) => {
      this.setState({
        reviews: data,
        restaurant: data[0].restaurantName,
        restId: data[0].restaurant,
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
          restId={this.state.restId}
        />
        <Reviews id="reviews" reviews={this.state.reviews} />
      </div>
    );
  }
}

export default App;
