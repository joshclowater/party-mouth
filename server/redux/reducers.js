const { combineReducers }  = require('redux-immutable');
const game = require('./Game').reducer;

module.exports = combineReducers({
  game,
});
