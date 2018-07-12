import React from 'react';
import styled, { keyframes } from 'styled-components';

import logo from 'src/assets/logo.svg';

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Logo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 12vh;
`;

export default function(props) {
  return (
    <Logo id={props.id} className={props.className} src={logo} alt="logo" />
  );
}
