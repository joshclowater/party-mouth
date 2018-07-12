import React from 'react';
import styled from 'styled-components';

const FieldWrapperDiv = styled.div`
  margin-bottom: 2vh;
`;

const Error = styled.span`
  color: red;
`;

const Warning = styled.span`
  color: orange;
`;

export default function FieldWrapper({
  inputName,
  label,
  children,
  touched,
  error,
  warning
}) {
  return (
    <FieldWrapperDiv>
      <label htmlFor={inputName}>{label}</label>
      {children}
      {touched &&
        ((error && <Error>{error}</Error>) ||
          (warning && <Warning>{warning}</Warning>))}
    </FieldWrapperDiv>
  );
}
