import styled, { keyframes } from 'styled-components';

import logo from 'src/assets/logo.svg';

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export default styled.img.attrs({
  src: logo,
  alt: 'logo'
})`
  animation: ${rotate360} infinite 20s linear;
  height: 12vh;
`;
