import * as types from '../Actions/types';

const initialState = {
  loading: true,
  error: false,
  detail: {},
};

const cityDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CITY_DETAIL_REQUESTED:
      return { ...state, loading: true };

    case types.GET_CITY_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        detail: action.data,
      };
    case types.GET_CITY_DETAIL_FAILED:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default cityDetailReducer;
