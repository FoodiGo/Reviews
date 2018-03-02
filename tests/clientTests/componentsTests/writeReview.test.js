import React from 'react';
import { mount } from 'enzyme';
import WriteReview from '../../../client/components/writeReview';

describe('WriteReview container', () => {
  const write = mount(<WriteReview restaurant="Mary's" />);

  test('WriteReview container should render an instance of User', () => {
    const users = write.find('.users');
    expect(users.length).toBe(1);
  });

  test('WriteReview container should render an instance of Stars', () => {
    const stars = write.find('.starBox');
    expect(stars.length).toBe(1);
  });
});
