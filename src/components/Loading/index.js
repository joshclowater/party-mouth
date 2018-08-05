import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { transform: scale(0); }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

export default styled.div`
  width: 10vh;
  height: 10vh;
  margin: 0 auto;
  background-color: #333;
  border-radius: 100%;
  animation: ${pulse} 1s infinite ease-in-out;
`;
