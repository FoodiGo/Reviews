import React from 'react';
import { mount } from 'enzyme';
import App from '../../../client/components/app';

describe('app container', () => {
  const app = mount(<App />);

  test('App container should render an instance of WriteReview container', () => {
    const writeReview = app.find('#write');
    expect(writeReview.length).toBe(1);
  });

  test('App container should render an instance of Reviews container', () => {
    const reviews = app.find('#reviews');
    expect(reviews.length).toBe(1);
  });
});
