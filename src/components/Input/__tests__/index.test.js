import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Input from '../';

it('Renders correctly', () => {
  expect(shallow(<Input />)).toMatchSnapshot();
});

describe('hasError', () => {
  const wrapper = shallow(<Input hasError />);
  it('has red border', () => {
    expect(wrapper).toHaveStyleRule('border-color', 'red');
  });
  it('has red border on focus', () => {
    expect(wrapper).toHaveStyleRule('border-color', 'red', {
      modifier: ':focus'
    });
  });
});
