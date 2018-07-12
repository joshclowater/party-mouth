import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import game from './Game';

const reducer = combineReducers({
  form,
  game
});

export default reducer;
