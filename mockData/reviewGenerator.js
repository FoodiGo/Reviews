const data = require('./reviewBodyGenerator.js');
const users = require('./mockUsers.js');

// let reviewIdCounter = 1001;

const getRandomNumber = limit => (
  Math.floor(Math.random() * limit)
);

// {
//   id: number, UNIQUE
//   restaurant: number (restaurant id number),
//   userName: string,
//   userPhoto: string,
//   userLocation: string,
//   rating: number (1-5, whole numbers only),
//   date: string,
//   reviewBody: string,
//   useful: number,
//   funny: number,
//   cool: number,
// }

const generateReview = (restaurantObj, numStars, reviewDate) => {
  const curUser = users[getRandomNumber(users.length)];
  if (numStars > 5 || numStars < 1) {
    return undefined;
  }

  const review = {
    restaurant: restaurantObj.id,
    userName: curUser.name,
    userPhoto: curUser.photo,
    userLocation: curUser.location,
    rating: numStars,
    date: reviewDate,
    reviewBody: data(restaurantObj.foodType, restaurantObj.title, numStars),
    useful: getRandomNumber(7),
    funny: getRandomNumber(7),
    cool: getRandomNumber(7),
  };

  return review;
};

module.exports = generateReview;
