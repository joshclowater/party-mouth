import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Input from '../';

it('Renders correctly', () => {
  expect(renderer.create(<Input />).toJSON()).toMatchSnapshot();
});

describe('hasError', () => {
  const wrapper = renderer.create(<Input hasError />).toJSON();
  it('has red border', () => {
    expect(wrapper).toHaveStyleRule('border-color', 'red');
  });
  it('has red border on focus', () => {
    expect(wrapper).toHaveStyleRule('border-color', 'red', {
      modifier: ':focus'
    });
  });
});
