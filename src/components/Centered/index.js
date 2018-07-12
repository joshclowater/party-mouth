import React from 'react';
import styled from 'styled-components';

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function(props) {
  return (
    <Centered id={props.id} className={props.className}>
      <div>{props.children}</div>
    </Centered>
  );
}
