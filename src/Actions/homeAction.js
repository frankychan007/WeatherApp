import * as types from './types';

export function requestCityList() {
  return {
    type: types.GET_CITY_LIST_REQUESTED,
  };
}

export function requestCityDetail(cityId) {
  return {
    type: types.GET_CITY_DETAIL_REQUESTED,
    cityId,
  };
}
