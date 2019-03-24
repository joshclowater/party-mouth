import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Button from '../';

it('Renders correctly', () => {
  expect(renderer.create(<Button />).toJSON()).toMatchSnapshot();
});

describe('disabled', () => {
  it('Renders correctly', () => {
    expect(renderer.create(<Button disabled />).toJSON()).toMatchSnapshot();
  });
});
