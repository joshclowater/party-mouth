export const getStatus = state => state.getIn(['game', 'status']);

export const getGameId = state => state.getIn(['game', 'gameId']);

export const getPlayers = state => state.getIn(['game', 'players']);
