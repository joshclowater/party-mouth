const { combineReducers }  = require('redux-immutable');
const Game = require('./Game').reducer;

module.exports = combineReducers({
  Game,
});
