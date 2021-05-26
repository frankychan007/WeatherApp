import { combineReducers } from 'redux';
import * as types from '../Actions/types';

const initialState = {
  loading: false,
};

const counts = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CITY_LIST_REQUESTED:
      return { ...state, loading: true };

    case types.GET_CITY_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counts,
});

export default rootReducer;
