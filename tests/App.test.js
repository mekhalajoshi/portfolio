import React from 'react';
import { render } from 'enzyme';
import App from '../src/App';

test('renders learn react link', () => {
  const wrapper = render(<App />);
  expect(wrapper.text()).toContain('Learn React');
});
