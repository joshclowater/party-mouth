import { fromJS, List } from 'immutable';

// Actions

export const startingGame = () => ({
  type: 'STARTING_GAME'
});

// Initial state

const initialState = fromJS({
  status: 'connecting-to-server'
});

// Reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CONNECTED': {
      if (action.role === 'host') {
        return state
          .set('role', action.role)
          .set('gameId', action.gameId)
          .set('status', 'waiting-for-players-to-connect')
          .set('players', new List());
      } else if (action.role === 'player') {
        return state.set('role', action.role).set('status', 'waiting-to-join');
      } else {
        throw new Error('invalid role', action.role);
      }
    }
    case 'CONNECTED_TO_GAME': {
      return state.set('status', 'waiting-for-game-start');
    }
    case 'PLAYER_CONNECTED_TO_GAME': {
      return state.update('players', players =>
        players.push(fromJS(action.player))
      );
    }
    case 'STARTING_GAME': {
      return state.set('status', 'starting-game');
    }
    case 'GAME_STARTED': {
      return state.set('status', 'game-started');
    }
    default: {
      return state;
    }
  }
}
