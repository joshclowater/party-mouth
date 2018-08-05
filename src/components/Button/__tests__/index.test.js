import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Button from '../';

it('Renders correctly', () => {
  expect(shallow(<Button />)).toMatchSnapshot();
});

describe('disabled', () => {
  it('Renders correctly', () => {
    expect(shallow(<Button disabled />)).toMatchSnapshot();
  });
});
