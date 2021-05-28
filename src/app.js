import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './Stores/store';
import RootNavigator from './Navigation/index';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator></RootNavigator>
    </Provider>
  );
};

export default App;
