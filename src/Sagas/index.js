import { all } from 'redux-saga/effects';
import cityListSaga from './cityListSaga';
import cityDetailSaga from './cityDetailSaga';

export default function* rootSaga() {
  yield all([cityListSaga(), cityDetailSaga()]);
}
