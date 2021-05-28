import React from 'react';
import { Text, Image, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Components/home';
import CityDetail from '../Components/cityDetail';
import About from '../Components/about';

const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Weather App' }}
      />
      <HomeStack.Screen
        name="Details"
        component={CityDetail}
        options={({ route, navigation }) => ({
          title: route.params.name,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <View style={{ paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 20 }}>{'<'}</Text>
              </View>
            </TouchableOpacity>
          ),
        })}
      />
    </HomeStack.Navigator>
  );
};

const AboutStackScreen = () => {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen
        name="Home"
        component={About}
        options={{ title: 'About Me' }}
      />
    </AboutStack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#2c4599',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            title: 'Home',
            tabBarIcon: ({ focused, size }) => {
              let icon = require('./Images/home_light.png');
              if (focused) {
                icon = require('./Images/home.png');
              }
              return (
                <Image source={icon} style={{ width: size, height: size }} />
              );
            },
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutStackScreen}
          options={{
            title: 'About',
            tabBarIcon: ({ focused, size }) => {
              let icon = require('./Images/about_light.png');
              if (focused) {
                icon = require('./Images/about.png');
              }
              return (
                <Image source={icon} style={{ width: size, height: size }} />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
