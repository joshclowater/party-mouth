import { fromJS } from 'immutable';

// Actions

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
          .set('status', 'waiting-for-players');
      } else if (action.role === 'player') {
        return state.set('role', action.role).set('status', 'waiting-to-join');
      } else {
        throw new Error('invalid role', action.role);
      }
    }
    default: {
      return state;
    }
  }
}
