import React from 'react';
import WriteReview from './writeReview';
import Reviews from './reviews';
import helpers from '../ajaxHelpers/ajaxHelpers';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      restaurant: '',
      restId: '',
    };
    this.setReviews = this.setReviews.bind(this);
  }

  componentDidMount() {
    this.setReviews(198);
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
          updateReviews={this.setReviews}
          restaurant={this.state.restaurant}
          restId={this.state.restId}
        />
        <Reviews
          reviews={this.state.reviews}
        />
      </div>
    );
  }
}

export default App;
