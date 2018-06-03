import { fromJS } from 'immutable';

// Actions

// Initial state

const initialState = fromJS({
  started: false
});

// Reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'connected': {
      return state.set('started', true).set('type', action.data.type);
    }
    default: {
      return state;
    }
  }
}
