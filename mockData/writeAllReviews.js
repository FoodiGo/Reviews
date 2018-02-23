const generateReview = require('./reviewGenerator.js');
// const allRestaurants = require('./basicRestaurantData.js');

const getRandomNumber = limit => (
  Math.floor(Math.random() * limit)
);

const reviewRatings = {
  1: [
    [1, 1, 1],
    [1, 1, 1, 2],
  ],
  2: [
    [2, 2, 2],
    [2, 3, 1],
    [1, 1, 4],
    [1, 1, 3, 3],
    [2, 2, 1, 3],
  ],
  3: [
    [3, 3, 3],
    [3, 2, 4],
    [1, 5, 2, 4],
    [3, 3, 1, 5],
    [3, 1, 5],
  ],
  4: [
    [4, 4, 4],
    [4, 3, 5],
    [3, 3, 5, 5],
    [5, 5, 2],
    [4, 4, 3, 5],
  ],
  5: [
    [5, 5, 5],
    [5, 5, 5, 4],
  ],
};

const dates = [
  'January 31, 2018 21:35:00',
  'February 19, 2018 11:22:00',
  'December 21, 2017 17:45:00',
  'November 7, 2017 09:13:00',
  'January 10, 2018 03:39:00',
  'January 18, 2018 18:18:00',
  'February 4, 2018 22:36:00',
  'February 9, 2018 10:35:00',
  'January 14, 2018 08:35:00',
  'December 19, 2017 01:28:00',
  'December 2, 2017 12:45:00',
  'November 23, 2017 19:19:00',
  'October 10, 2017 17:48:00',
  'September 16, 2017 16:01:00',
  'October 19, 2017 13:55:00',
  'December 4, 2017 17:09:00',
  'November 5, 2017 03:18:00',
  'February 12, 2018 11:49:00',
  'January 19, 2018 07:22:00',
  'February 17, 2018 13:21:00',
  'February 23, 2018 14:07:00',
];


const writeReviews = (restList) => {
  const allReviews = [];

  restList.forEach((restObj) => {
    const { rating } = restObj;
    const possibleRatings = reviewRatings[rating];
    const actualRatings = possibleRatings[getRandomNumber(possibleRatings.length)];

    actualRatings.forEach((curRating) => {
      const date = dates[getRandomNumber(dates.length)];
      const curReview = generateReview(restObj, curRating, date);
      allReviews.push(curReview);
    });
  });

  return allReviews;
};

module.exports = writeReviews;
