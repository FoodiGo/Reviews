const writeReviews = require('./writeAllReviews.js');
const db = require('../database/review.js');

const seedDataBase = (restaurantList, callback) => {
  const reviews = writeReviews(restaurantList);

  reviews.forEach((review, index) => {
    db.insertReview(review, (err) => {
      if (err) {
        callback(err);
      } else if (index === reviews.length - 1) {
        callback(null);
      }
    });
  });
};

module.exports = seedDataBase;
