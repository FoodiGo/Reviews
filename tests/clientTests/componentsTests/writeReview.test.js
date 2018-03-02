import React from 'react';
import { mount } from 'enzyme';
import WriteReview from '../../../client/components/writeReview';

describe('WriteReview container', () => {
  const write = mount(<WriteReview restaurant="Mary's" />);

  test('WriteReview container should render an instance of User', () => {
    const users = write.find('#currentUser');
    expect(users.length).toBe(1);
  });
});
