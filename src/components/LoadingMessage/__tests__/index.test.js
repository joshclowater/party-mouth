import React from 'react';
import { shallow } from 'enzyme';
import LoadingMessage from '../';

it('Renders correctly', () => {
  expect(shallow(<LoadingMessage message="mock message" />)).toMatchSnapshot();
});
