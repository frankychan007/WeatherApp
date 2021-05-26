import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import configureStore from './Stores/store';
import Home from './Components/home';
import CityDetail from './Components/cityDetail';
import AboutUs from './Components/aboutUs';

const HomeStack = createStackNavigator();
const AccountStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Weather App' }}
      />
      <HomeStack.Screen name="Details" component={CityDetail} />
    </HomeStack.Navigator>
  );
};

const AccountStackScreen = () => {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="Home"
        component={AboutUs}
        options={{ title: 'About Us' }}
      />
    </AccountStack.Navigator>
  );
};

const store = configureStore();

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{ title: 'Home' }}
          />
          <Tab.Screen
            name="Account"
            component={AccountStackScreen}
            options={{ title: 'About' }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
