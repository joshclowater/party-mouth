import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Logo from '../';

it('Renders correctly', () => {
  expect(renderer.create(<Logo />).toJSON()).toMatchSnapshot();
});
