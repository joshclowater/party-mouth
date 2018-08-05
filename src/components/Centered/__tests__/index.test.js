import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import Centered from '../';

it('Renders correctly', () => {
  expect(
    mount(
      <Centered id="mock id" className="mock class">
        "Children"
      </Centered>
    )
  ).toMatchSnapshot();
});
