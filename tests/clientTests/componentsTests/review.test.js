import React from 'react';
import { mount } from 'enzyme';
import Review from '../../../client/components/review';

describe('review container', () => {
  const review = mount(<Review />);

  test('Review container should render an instance of User', () => {
    const users = review.find('div.users');
    expect(users.length).toBe(1);
  });

  test('Review container should render three instances of Button', () => {
    const buttons = review.find('button');
    expect(buttons.length).toBe(3);
  });
});

