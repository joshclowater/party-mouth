import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid transparent;
  padding: 1vh 1.8vh;
  font-size: 2.5vh;
  border-radius: .6vh;
  cursor: pointer;

  color: #fff;
  background-color: #007bff;
  border-color: #007bff;

  :hover {
    background-color: #0069d9;
    border-color: #0062cc;
  }
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;

export default function(props) {
  return (
    <Button
      id={props.id}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
}