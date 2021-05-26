import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
  FlatList,
} from 'react-native';

export default function Example() {
  const [count, setCount] = useState(0);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>You clicked {count} times</Text>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
}
