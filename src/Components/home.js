import React, {useEffect, useState} from 'react';
import {
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {requestCityList} from '../Actions/homeAction';

const Example = ({navigation}) => {
  const count = useSelector(state => state.counts.count);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          dispatch(requestCityList());
          navigation.navigate('Details');
        }}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Example;
