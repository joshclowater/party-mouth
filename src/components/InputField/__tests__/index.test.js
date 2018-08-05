import React from 'react';
import { shallow } from 'enzyme';
import InputField, { RenderField } from '../';

it('InputField renders correctly', () => {
  expect(shallow(<InputField name="mock name" />)).toMatchSnapshot();
});

it('RenderField renders correctly', () => {
  expect(
    shallow(
      <RenderField
        input={{ name: 'mockName', mockInputField: 'mock input field value' }}
        label="mock label"
        id="mock id"
        meta={{
          touched: true,
          error: 'mock error',
          warning: 'mock warning',
          submitting: true
        }}
      />
    )
  ).toMatchSnapshot();
});

describe('id is not passed into RenderField', () => {
  const wrapper = shallow(
    <RenderField
      input={{ name: 'mockName', mockInputField: 'mock input field value' }}
      label="mock label"
      meta={{
        touched: true,
        error: 'mock error',
        warning: 'mock warning',
        submitting: true
      }}
    />
  );
  it('uses input.name as the id', () => {
    expect(wrapper.find('#mockName').length).toBe(1);
  });
});
