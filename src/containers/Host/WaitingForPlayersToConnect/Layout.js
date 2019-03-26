import React from 'react';
import styled from 'styled-components';
import Button from 'src/components/Button';
import { startGame } from 'src/socket';

const Wrapper = styled.div`
  text-align: center;
  height: 60vh;
`;

const GameInfo = styled.div`
  height: 25vh;
`;

const GameId = styled.div`
  font-size: 8vh;
  margin-bottom: 3vh;
`;

const Players = styled.div`
  margin-bottom: 4vh;
`;

const PlayersHeader = styled.div`
  font-size: 4vh;
  margin-bottom: 2vh;
`;

const Player = styled.div`
  margin-bottom: 1.5vh;
`;

export default function(props) {
  return (
    <Wrapper>
      <GameInfo>
        <div>Your game id is</div>
        <GameId id="gameId">{props.gameId}</GameId>
        <div>Enter the id on additional devices to connect</div>
      </GameInfo>
      {props.players.length > 0 && (
        <Players id="players">
          <PlayersHeader>Players</PlayersHeader>
          {props.players.map(player => (
            <Player key={player.id}>{player.name}</Player>
          ))}
        </Players>
      )}
      {props.players.length >= 4 && (
        <Button id="startGame" onClick={startGame}>
          Start game
        </Button>
      )}
    </Wrapper>
  );
}
