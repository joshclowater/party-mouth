const { put, select, takeEvery } = require('redux-saga/effects');
const {
  getOtherIds,
  getPlayersGameId,
  hasGame,
  isGameWaitingForPlayers,
  isGameAtMaxPlayers,
  isNameInGame,
  getHostId
} = require('./selectors');
const {
  hostConnection,
  deleteGame,
  playerConnection,
  setGameInProgress
} = require('./');

const sockets = {};

const makeId = () => {
  let id = '';
  const possible = 'abcdefghijklmnopqrstuvwxyz';
  for (var i = 0; i < 5; i++) {
    id += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return id;
}

function* onConnection({ role, id, socket }) {
  if (role === 'host') {
    const gameId = makeId();
    yield put(hostConnection(gameId, id));
    sockets[id] = socket;
    socket.emit('CONNECTED', { role, gameId });
  } else if (role === 'player') {
    sockets[id] = socket;
    socket.emit('CONNECTED', { role });
  } else {
    console.error('invalid role', role);
    socket.emit('INVALID_ROLE', { role });
  }
}

function* onDisconnect({ id }) {
  delete sockets[id];
  const gameId = yield select(getPlayersGameId, id);
  if (gameId !== undefined) {
    const otherIds = yield select(getOtherIds, id);
    yield put(deleteGame(gameId));
    otherIds.forEach(otherId => {
      sockets[otherId].emit('DISCONNECT', { message: 'Player was disconnected' })
      sockets[otherId].disconnect();
      delete sockets[otherId];
    });
  }
}

function* onConnectToGame({ id, socket, gameId, name }) {
  // Validate gameId exists
  if (!(yield select(hasGame, gameId))) {
    socket.emit('CONNECT_TO_GAME_FAILED', { error: { gameId: 'A game with this id does not exist' }});
    return;
  }
  // Validate game has started
  if (!(yield select(isGameWaitingForPlayers, gameId))) {
    socket.emit('CONNECT_TO_GAME_FAILED', { error: { gameId: 'The game has already started' }});
    return;
  }
  if ((yield select(isGameAtMaxPlayers, gameId))) {
    socket.emit('CONNECT_TO_GAME_FAILED', { error: { gameId: 'The game is full' }});
    return;
  }
  // Validate name isn't already in game
  if ((yield select(isNameInGame, gameId, name))) {
    socket.emit('CONNECT_TO_GAME_FAILED', { error: { name: 'This name already exists in the game' }});
    return;
  }
  // Add to game and send player connected events
  yield put(playerConnection(gameId, id, name));
  socket.emit('CONNECTED_TO_GAME', name);
  const host = yield select(getHostId, gameId);
  sockets[host].emit('PLAYER_CONNECTED_TO_GAME', { player: { id, name }});
}

function* onStartGame({ socket, id }) {
  const gameId = yield select(getPlayersGameId, id);
  yield put(setGameInProgress(gameId));
  socket.emit('GAME_STARTED');
}

module.exports = [
  takeEvery('CONNECTION', onConnection),
  takeEvery('DISCONNECT', onDisconnect),
  takeEvery('CONNECT_TO_GAME', onConnectToGame),
  takeEvery('START_GAME', onStartGame)
];
