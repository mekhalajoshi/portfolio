import React from 'react';
import { render } from 'enzyme';
import About from '../../src/components/About';

test('renders learn react link', () => {
  const wrapper = render(<About />);
  expect(wrapper.text()).toContain('About Me');
});
