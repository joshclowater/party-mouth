import { fromJS } from 'immutable';

// Actions

// Initial state

const initialState = fromJS({});

// Reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'TODO': {
      return state.set('TODO', 'TODO');
    }
    default: {
      return state;
    }
  }
}
