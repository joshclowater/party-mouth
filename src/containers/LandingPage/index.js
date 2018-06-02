import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Logo from '../../components/Logo';

const Wrapper = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #222;
  height: 20vh;
  padding: 3vh;
  color: white;
`;

const Title = styled.h1`
  font-size: 4vh;
`;

export default function() {
  return (
    <Wrapper>
      <Header>
        <Logo />
        <Title>Party Mouth</Title>
      </Header>
      <Link to="/host">
        <Button id="App-host-button">Start a game</Button>
      </Link>
      <Link to="/play">
        <Button id="App-play-button">Join a game</Button>
      </Link>
    </Wrapper>
  );
}
