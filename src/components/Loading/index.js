import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { transform: scale(0); }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

const Pulse = styled.div`
  width: 10vh;
  height: 10vh;
  margin: 0 auto;
  background-color: #333;
  border-radius: 100%;
  animation: ${pulse} 1s infinite ease-in-out;
`;

export default function(props) {
  return <Pulse id={props.id} className={props.className} />;
}
