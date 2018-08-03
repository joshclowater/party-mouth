const { List } = require('immutable');

const getPlayersGame = (state, id) =>
  state.get('game').find(game =>
    game.getIn(['host', 'id']) === id ||
    game.get('players').find(player => player.get('id') === id)
  )

module.exports.getOtherIds = (state, id) => {
  const playersGame = getPlayersGame(state, id);
  if (playersGame !== undefined) {
    let otherIds;
    const hostId = playersGame.getIn(['host', 'id'])
    if (hostId === id) {
      otherIds = new List();
    } else {
      otherIds = new List([hostId])
    }
    return playersGame.get('players').reduce(
      (otherIds, player) => {
        if (player.get('id') !== id) {
          return otherIds.push(player.get('id'));
        } else {
          return otherIds;
        }
      },
      otherIds
    );
  } else {
    return new List();
  }
}

module.exports.getPlayersGameId = (state, id) => {
  const game = getPlayersGame(state, id);
  if (game !== undefined) {
    return game.get('id');
  } else {
    return undefined;
  }
}

module.exports.hasGame = (state, gameId) =>
  state.getIn(['game', gameId]) !== undefined

module.exports.isGameWaitingForPlayers = (state, gameId) =>
  state.getIn(['game', gameId, 'status']) === 'waiting-for-players'

module.exports.isNameInGame = (state, gameId, name) =>
  state
    .getIn(['game', gameId, 'players'])
    .find(player =>
      player.get('name') === name
    ) !== undefined

module.exports.getHostId = (state, gameId) =>
  state.getIn(['game', gameId, 'host', 'id'])
