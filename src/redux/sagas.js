import { all } from 'redux-saga/effects';
import gameSagas from './Game/sagas';

export default function* rootSaga() {
  yield all([...gameSagas]);
}
