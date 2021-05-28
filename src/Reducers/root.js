import { combineReducers } from 'redux';
import * as types from '../Actions/types';

import cityListReducer from './cityListReducer';
import cityDetailReducer from './cityDetailReducer';

const rootReducer = combineReducers({
  cityListReducer,
  cityDetailReducer,
});

export default rootReducer;
