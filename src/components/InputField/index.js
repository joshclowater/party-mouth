import React from 'react';
import { Field } from 'redux-form/immutable';
import FieldWrapper from '../FieldWrapper';
import Input from '../Input';

export const RenderField = ({
  input,
  label,
  id,
  meta: { touched, error, warning, submitting },
  ...rest
}) => (
  <FieldWrapper
    inputName={input.name}
    label={label}
    touched={touched}
    error={error}
    warning={warning}
  >
    <Input
      {...input}
      {...rest}
      id={id || input.name}
      disabled={!!submitting}
      hasError={touched && !!error}
    />
  </FieldWrapper>
);

export default function InputField(props) {
  return <Field {...props} component={RenderField} />;
}
