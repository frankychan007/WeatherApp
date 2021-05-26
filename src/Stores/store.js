import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../Reducers/root';
import rootSaga from '../Sagas/index';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const configureStore = initialState => {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  // Mount it on the Store
  // Then run the saga
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
