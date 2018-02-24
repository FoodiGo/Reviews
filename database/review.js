const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  restaurant: Number,
  userName: String,
  userPhoto: String,
  userLocation: String,
  rating: Number,
  date: String,
  reviewBody: String,
  useful: Number,
  funny: Number,
  cool: Number,
});

const Review = mongoose.model('Review', reviewSchema);



