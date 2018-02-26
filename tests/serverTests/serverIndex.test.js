const request = require('supertest');
const app = require('../../server/serverIndex');

test('server responds to successful GET requests with 200', (done) => {
  request(app)
    .get('/restaurants/1234/reviews')
    .expect(200)
    .end(err => (
      err ? done(err) : done()
    ));
});

test('server responds to successful POST requests with a 201', (done) => {
  request(app)
    .post('/restaurants/1234/reviews')
    .expect(201)
    .end(err => (
      err ? done(err) : done()
    ));
});

test('server responds to successful PUT requests with a 200', (done) => {
  request(app)
    .put('/restaurants/1234/reviews/101')
    .expect(200)
    .end(err => (
      err ? done(err) : done()
    ));
});

test('server responds to nonexistant routes with 404', (done) => {
  request(app)
    .get('/hello')
    .expect(404)
    .end(err => (
      err ? done(err) : done()
    ));
});
