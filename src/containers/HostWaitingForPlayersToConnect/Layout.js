import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  height: 60vh;
`;

const GameInfo = styled.div`
  height: 30vh;
`;

const GameId = styled.div`
  font-size: 8vh;
  margin-bottom: 3vh;
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
      {props.players.size > 0 && (
        <div id="players">
          <PlayersHeader>Players</PlayersHeader>
          {props.players.map(player => (
            <Player key={player.get('name')}>{player.get('name')}</Player>
          ))}
        </div>
      )}
    </Wrapper>
  );
}
