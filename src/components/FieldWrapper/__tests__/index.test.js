import React from 'react';
import { shallow, mount } from 'enzyme';
import FieldWrapper from '../';

it('Renders correctly', () => {
  expect(
    shallow(
      <FieldWrapper inputName="mock input name" label="mock label">
        "mock children"
      </FieldWrapper>
    )
  ).toMatchSnapshot();
});

describe('touched is true', () => {
  describe('has error and warning', () => {
    const wrapperText = mount(
      <FieldWrapper touched error="mock error" warning="mock warning" />
    ).text();
    it('displays error only', () => {
      expect(wrapperText).toMatch('mock error');
      expect(wrapperText).not.toMatch('mock warning');
    });
  });
  describe('has error', () => {
    const wrapperText = mount(
      <FieldWrapper touched error="mock error" />
    ).text();
    it('displays error', () => {
      expect(wrapperText).toMatch('mock error');
    });
  });
  describe('has only warning', () => {
    const wrapperText = mount(
      <FieldWrapper touched warning="mock warning" />
    ).text();
    it('displays warning', () => {
      expect(wrapperText).toMatch('mock warning');
    });
  });
});

describe('touched is false', () => {
  describe('has error and warning', () => {
    const wrapperText = mount(
      <FieldWrapper touched={false} error="mock error" warning="mock warning" />
    ).text();
    it('displays neither error nor warning', () => {
      expect(wrapperText).not.toMatch('mock error');
      expect(wrapperText).not.toMatch('mock warning');
    });
  });
});
