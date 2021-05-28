import React, { useEffect } from 'react';
import {
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { requestCityList } from '../Actions/homeAction';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  // Fetch data from store
  const cities = useSelector((state) => state.cityListReducer.cities);
  const loading = useSelector((state) => state.cityListReducer.loading);
  const error = useSelector((state) => state.cityListReducer.error);

  useEffect(() => {
    dispatch(requestCityList());
  }, []);

  const _renderEmptyComponent = () => {
    if (error) {
      return (
        <View style={styles.emptyComponentContainer}>
          <Text>
            There is something wrong with the internet, please drag down to
            refresh the page.
          </Text>
        </View>
      );
    }
    return null;
  };

  const _renderListItem = (item) => {
    return (
      <TouchableOpacity
        activeOpacity={0.4}
        onPress={() => {
          navigation.navigate({
            name: 'Details',
            params: item,
          });
        }}
      >
        <View style={styles.listItemContainer}>
          <Text style={styles.listItemText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cities}
        refreshControl={
          <RefreshControl
            style={styles.refreshControl}
            refreshing={loading}
            onRefresh={() => dispatch(requestCityList())}
          />
        }
        ListEmptyComponent={() => _renderEmptyComponent()}
        keyExtractor={(item, index) => 'cityList' + index.toString()}
        renderItem={({ item }) => _renderListItem(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    marginHorizontal: 10,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  listItemText: {
    fontSize: 32,
  },
  refreshControl: {
    backgroundColor: 'transparent',
    tintColor: '#f2c72e',
  },
  emptyComponentContainer: {
    justifyContent: 'center',
    padding: 20,
  },
});

export default Home;
