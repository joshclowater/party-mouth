import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Loading from '../';

it('Renders correctly', () => {
  expect(shallow(<Loading />)).toMatchSnapshot();
});
