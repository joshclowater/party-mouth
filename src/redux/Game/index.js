import { createAction, createReducer } from 'redux-starter-kit';

// Actions

export const startingGame = createAction('STARTING_GAME');

// Initial state

const initialState = {
  status: 'connecting-to-server'
};

// Reducer

export default createReducer(initialState, {
  CONNECTED: (state, action) => {
    if (action.role === 'host') {
      state.role = action.role;
      state.gameId = action.gameId;
      state.status = 'waiting-for-players-to-connect';
      state.players = [];
    } else if (action.role === 'player') {
      state.role = action.role;
      state.status = 'waiting-to-join';
    } else {
      throw new Error('invalid role', action.role);
    }
  },
  CONNECTED_TO_GAME: state => {
    state.status = 'waiting-for-game-start';
  },
  PLAYER_CONNECTED_TO_GAME: (state, action) => {
    state.players.push(action.player);
  },
  STARTING_GAME: state => {
    state.status = 'starting-game';
  },
  GAME_STARTED: state => {
    state.status = 'game-started';
  }
});
