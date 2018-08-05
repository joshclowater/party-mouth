import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Logo from '../';

it('Renders correctly', () => {
  expect(shallow(<Logo />)).toMatchSnapshot();
});
