import React, { useEffect, useState } from 'react';
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const Example = ({ navigation }) => {
  const count = useSelector((state) => state.counts.count);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>Detail Here {count}</Text>
      <TouchableOpacity
        onPress={() => {
          // dispatch(requestCityList());
        }}
      >
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
