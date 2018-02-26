const express = require('express');

const router = express.Router();

router.get('/restaurants/:restaurantId/reviews', (req, res) => {
  res.json(['hello']);
});

router.post('/restaurants/:restaurantId/reviews', (req, res) => {
  res.sendStatus(201);
});

router.put('/restaurants/:restaurantId/reviews/:reviewId', (req, res) => {
  res.sendStatus(200);
});

router.all('/*', (req, res) => {
  res.sendStatus(404);
});

module.exports = router;
