const { fromJS, Map } = require('immutable');

// Actions

module.exports.hostConnection = (gameId, id) => ({
  type: 'HOST_CONNECTION',
  gameId,
  id
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
          players: {}
        })
      );
    }
    default: {
      return state;
    }
  }
}
