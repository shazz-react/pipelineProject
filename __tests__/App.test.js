/**
 * @format
 */

import 'react-native';
import React from 'react';
import App, { sum } from '../App';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('calculate', () => {
  expect(sum(1, 1)).toBe(3)
})
