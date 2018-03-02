import React from 'react';
import { mount } from 'enzyme';
import Stars from '../../../client/components/stars';

describe('Stars container', () => {
  const starsBox = mount(<Stars rating={3} />);
  const allStars = starsBox.find('.star');

  test('Stars container should contain 5 instances of Star', () => {
    expect(allStars.length).toBe(5);
  });

  test('Stars container should correctly assign color-classes', () => {
    const selectedStars = allStars.find('.selectedStar');
    const greyStars = allStars.find('.greyStar');

    expect(selectedStars.length).toBe(3);
    expect(greyStars.length).toBe(2);
  });
});
