const data = require('./reviewBodyGenerator.js');
const users = require('./mockUsers.js');
const helpers = require('./reviewsHelperData.js');

const generateReview = (restaurantObj, numStars, date) => {
  const curUser = users[helpers.getRandomNumber(users.length)];
  if (numStars > 5 || numStars < 1) {
    return undefined;
  }

  const isoDate = new Date(date).toISOString();

  const review = {
    restaurant: restaurantObj.id,
    userName: curUser.name,
    userPhoto: curUser.photo,
    userLocation: curUser.location,
    rating: numStars,
    date: isoDate,
    reviewBody: data(restaurantObj.foodType, restaurantObj.title, numStars),
    useful: helpers.getRandomNumber(7),
    funny: helpers.getRandomNumber(7),
    cool: helpers.getRandomNumber(7),
  };

  return review;
};

module.exports = generateReview;