import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../Actions/types';

const getWeatherCityDetail = ({ location }) => {
  return fetch('http://localhost:3000/cityDetail', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      lat: location.lat,
      lon: location.lon,
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

function* requestWeatherCityDetail(action) {
  try {
    const response = yield call(() =>
      getWeatherCityDetail({ location: action.location })
    );
    yield put({
      type: types.GET_CITY_DETAIL_SUCCESS,
      data: response.data,
    });
  } catch (e) {
    console.log(e);
    yield put({ type: types.GET_CITY_DETAIL_FAILED, message: e.message });
  }
}

function* mySaga() {
  yield takeEvery(types.GET_CITY_DETAIL_REQUESTED, requestWeatherCityDetail);
}

export default mySaga;
