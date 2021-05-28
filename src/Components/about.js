import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Example = () => {
  return (
    <View style={styles.container}>
      <Text>Developed By Frank Chen</Text>
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
