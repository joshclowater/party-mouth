const { put, takeEvery } = require('redux-saga/effects');
const { hostConnection } = require('./');

const makeId = () => {
  var id = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';
  for (var i = 0; i < 5; i++) {
    id += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return id;
}

function* onConnection({ role, id, socket }) {
  if (role === 'host') {
    const gameId = makeId();
    yield put(hostConnection(gameId, id, socket));
    socket.emit('CONNECTED', { role, gameId });
  } else if (role === 'player') {
    socket.emit('CONNECTED', { role });
  } else {
    console.error('invalid role', role);
  }
}

module.exports = [
  takeEvery('CONNECTION', onConnection),
];
