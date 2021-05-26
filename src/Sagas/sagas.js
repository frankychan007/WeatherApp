import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import * as types from '../Actions/types';

const getWeatherCityList = () => {
  return fetch(`http://localhost:3000/v1`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .catch(error => {
      console.log(error);
      throw error;
    });
};

function* requestWeatherCityList(action) {
  try {
    const response = yield call(getWeatherCityList);
    yield put({
      type: types.GET_CITY_LIST_SUCCESS,
      count: response.count,
    });
  } catch (e) {
    console.log(e);
    yield put({type: 'USER_FETCH_FAILED', message: e.message});
  }
}

function* mySaga() {
  yield takeEvery(types.GET_CITY_LIST_REQUESTED, requestWeatherCityList);
}

export default mySaga;
