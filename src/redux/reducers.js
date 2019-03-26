import { combineReducers } from 'redux-starter-kit';
import { reducer as form } from 'redux-form/immutable';
import game from './Game';

export default combineReducers({
  form,
  game
});
