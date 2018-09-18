import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../Layout';

it('Renders correctly', () => {
  expect(
    shallow(<Layout submitting="mock submitting value" />)
  ).toMatchSnapshot();
});

describe('submitting is true', () => {
  const wrapper = shallow(<Layout submitting />);
  it('Renders "Connecting..." in the button', () => {
    expect(wrapper.find('#joinGame').get(0).props.children).toEqual(
      'Connecting...'
    );
  });
});

describe('submitting is false', () => {
  const wrapper = shallow(<Layout submitting={false} />);
  it('Renders "Join game" in the button', () => {
    expect(wrapper.find('#joinGame').get(0).props.children).toEqual(
      'Join game'
    );
  });
});
