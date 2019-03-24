import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import game from './Game';

export default combineReducers({
  form,
  game
});
