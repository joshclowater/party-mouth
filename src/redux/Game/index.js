import { fromJS } from 'immutable';

// Actions

// Initial state

const initialState = fromJS({
  status: 'connecting-to-server',
  players: []
});

// Reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CONNECTED': {
      if (action.role === 'host') {
        return state
          .set('role', action.role)
          .set('gameId', action.gameId)
          .set('status', 'waiting-for-players-to-connect');
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
    default: {
      return state;
    }
  }
}
