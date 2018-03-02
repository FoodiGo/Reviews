import React from 'react';
import { mount } from 'enzyme';
import Star from '../../../client/components/star';

describe('Star components', () => {
  const star = mount(<Star />);

  test('Star component should contain the star image ip address', () => {
    const image = 'https://s3-us-west-1.amazonaws.com/foodigouserphotos/Star.png';

    const starImage = star.find('.starImg');
    expect(starImage.html().includes(image)).toBe(true);
  });
});
