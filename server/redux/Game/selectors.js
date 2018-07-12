
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
