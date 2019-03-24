import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Loading from '../';

it('Renders correctly', () => {
  expect(renderer.create(<Loading />).toJSON()).toMatchSnapshot();
});
