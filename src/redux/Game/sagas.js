import { put, takeEvery } from 'redux-saga/effects';
import { stopSubmit } from 'redux-form/immutable';

function* onGameConnectionFailed({ error }) {
  yield put(stopSubmit('playerConnectToGame', error));
}

export default [takeEvery('CONNECT_TO_GAME_FAILED', onGameConnectionFailed)];
