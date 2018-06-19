const { all } = require('redux-saga/effects');
const gameSagas = require('./Game/sagas');

module.exports = function* rootSaga() {
  yield all([
    ...gameSagas,
  ]);
}
