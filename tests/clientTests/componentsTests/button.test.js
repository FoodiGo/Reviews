import React from 'react';
import { mount } from 'enzyme';
import Button from '../../../client/components/button';

describe('Button container', () => {
  const button = mount(<Button id="456" restaurant={123} score={4} type="Cool" />);

  test('Button should be stateful', () => {
    expect(button).toHaveProperty('state');
  });
});
