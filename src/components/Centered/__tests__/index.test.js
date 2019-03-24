import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Centered from '../';

it('Renders correctly', () => {
  expect(
    renderer
      .create(
        <Centered id="mock id" className="mock class">
          "Children"
        </Centered>
      )
      .toJSON()
  ).toMatchSnapshot();
});
