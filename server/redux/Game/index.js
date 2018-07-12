const { fromJS, Map } = require('immutable');

// Actions

module.exports.hostConnection = (gameId, id) => ({
  type: 'HOST_CONNECTION',
  gameId,
  id
})

module.exports.playerConnection = (gameId, id, name) => ({
  type: 'PLAYER_CONNECTION',
  gameId,
  id,
  name
})

// Reducer

module.exports.reducer = function reducer(state = new Map(), action) {
  switch (action.type) {
    case 'HOST_CONNECTION': {
      return state.set(
        action.gameId,
        fromJS({
          status: 'waiting-for-players',
          host: {
            id: action.id
          },
          players: []
        })
      );
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
    default: {
      return state;
    }
  }
}
