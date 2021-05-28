import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../Actions/types';

const getWeatherCityList = () => {
  return fetch('http://localhost:3000/cities', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

function* requestWeatherCityList(action) {
  try {
    const response = yield call(getWeatherCityList);
    yield put({
      type: types.GET_CITY_LIST_SUCCESS,
      data: response.data,
    });
  } catch (e) {
    console.log(e);
    yield put({ type: types.GET_CITY_LIST_FAILED, message: e.message });
  }
}

function* mySaga() {
  yield takeEvery(types.GET_CITY_LIST_REQUESTED, requestWeatherCityList);
}

export default mySaga;
