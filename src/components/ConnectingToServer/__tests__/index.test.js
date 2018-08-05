import React from 'react';
import { shallow } from 'enzyme';
import ConnectingToServer from '../';

it('Renders correctly', () => {
  expect(shallow(<ConnectingToServer />)).toMatchSnapshot();
});
