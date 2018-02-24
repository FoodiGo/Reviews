const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reviews');

const reviewSchema = mongoose.Schema({
  restaurant: Number,
  userName: String,
  userPhoto: String,
  userLocation: String,
  rating: Number,
  date: Date,
  reviewBody: String,
  useful: Number,
  funny: Number,
  cool: Number,
});

const Review = mongoose.model('Review', reviewSchema);

const insertReview = (reviewObject, callback) => {
  Review.create(reviewObject).exec(callback);
};

const findReview = (reviewId, callback) => {
  Review.findById(reviewId).exec(callback);
};

const findReviewsByRestaurant = (restaurantId, callback) => {
  Review.find({ restaurant: restaurantId }).sort('-date').exec(callback);
};


module.exports.insertReview = insertReview;
module.exports.findReview = findReview;
module.exports.findReviewsByRestaurant = findReviewsByRestaurant;
