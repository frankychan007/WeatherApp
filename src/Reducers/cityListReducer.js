import * as types from '../Actions/types';

const initialState = {
  loading: true,
  error: false,
  cities: [],
};

const cityListReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CITY_LIST_REQUESTED:
      return { ...state, loading: true };

    case types.GET_CITY_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        cities: action.data,
      };
    case types.GET_CITY_LIST_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default cityListReducer;
