import { put, takeEvery } from 'redux-saga/effects';
import { stopSubmit } from 'redux-form/immutable';

function onDisconnect({ message }) {
  alert(message);
  window.location.reload();
}

function* onGameConnectionFailed({ error }) {
  yield put(stopSubmit('playerConnectToGame', error));
}

export default [
  takeEvery('DISCONNECT', onDisconnect),
  takeEvery('CONNECT_TO_GAME_FAILED', onGameConnectionFailed)
];
