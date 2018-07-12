import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ButtonComponent from 'src/components/Button';
import Logo from 'src/components/Logo';
import Centered from 'src/components/Centered';

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4vh;
`;

const Header = styled.div`
  background-color: #222;
  height: 20vh;
  padding: 3vh;
  color: white;
`;

const Body = styled(Centered)`
  height: 15vh;
  padding: 3vh;
`;

const Button = styled(ButtonComponent)`
  margin: 0 2vh;
`;

export default function() {
  return (
    <Wrapper>
      <Header>
        <Logo />
        <Title>Party Mouth</Title>
      </Header>
      <Body>
        <Link to="/host">
          <Button id="host">Start a game</Button>
        </Link>
        <Link to="/play">
          <Button id="play">Join a game</Button>
        </Link>
      </Body>
    </Wrapper>
  );
}
