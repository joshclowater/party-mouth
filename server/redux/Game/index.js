const { fromJS, Map } = require('immutable');

// Actions

module.exports.hostConnection = (gameId, id) => ({
  type: 'HOST_CONNECTION',
  gameId,
  id
});

module.exports.deleteGame = gameId => ({
  type: 'DELETE_GAME',
  gameId
});

module.exports.playerConnection = (gameId, id, name) => ({
  type: 'PLAYER_CONNECTION',
  gameId,
  id,
  name
});

module.exports.setGameInProgress = (gameId) => ({
  type: 'SET_GAME_IN_PROGRESS'
});

// Reducer

module.exports.reducer = function reducer(state = new Map(), action) {
  switch (action.type) {
    case 'HOST_CONNECTION': {
      return state.set(
        action.gameId,
        fromJS({
          id: action.gameId,
          status: 'waiting-for-players',
          host: {
            id: action.id
          },
          players: []
        })
      );
    }
    case 'DELETE_GAME': {
      return state.delete(action.gameId);
    }
    case 'PLAYER_CONNECTION': {
      return state.updateIn(
        [action.gameId, 'players'],
        players =>
          players.push(
            new Map({
              id: action.id,
              name: action.name
            })
          )
      );
    }
    case 'SET_GAME_IN_PROGRESS': {
      return state.setIn([action.gameId, 'status'], 'game-in-progress');
    }
    default: {
      return state;
    }
  }
}
