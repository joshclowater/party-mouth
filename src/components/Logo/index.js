import styled, { css, keyframes } from 'styled-components';

import logo from 'src/assets/logo.svg';

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const animationRule = css`
  ${rotate360} infinite 20s linear
`;

export default styled.img.attrs(() => ({
  src: logo,
  alt: 'logo'
}))`
  animation: ${animationRule};
  height: 12vh;
`;
