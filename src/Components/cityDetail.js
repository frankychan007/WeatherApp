import React, { useEffect } from 'react';
import {
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { requestCityDetail } from '../Actions/homeAction';

const Example = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const location = {
    lat: route.params.lat,
    lon: route.params.lon,
  };

  // Fetch data from store
  const cityDetail = useSelector((state) => state.cityDetailReducer.detail);
  const loading = useSelector((state) => state.cityDetailReducer.loading);
  const error = useSelector((state) => state.cityDetailReducer.error);

  // Get weather detail of the city by lat and lon
  useEffect(() => {
    dispatch(requestCityDetail(location));
  }, []);

  const _renderEmptyComponent = () => {
    // Render reminder if there is an error in the api
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

  const _currentWeather = () => {
    return (
      <View style={styles.currentWeatherContainer}>
        <View style={styles.currentWeatherSubLeftContainer}>
          <View style={styles.currentWeatherSubLeftContainerWrapper}>
            <Text style={{ fontSize: 100 }}>{cityDetail.temp}</Text>
            <Text style={{ fontSize: 40 }}>℃</Text>
          </View>
        </View>
        <View style={styles.currentWeatherSubRightContainer}>
          <Image
            source={{ uri: cityDetail.imageUrl }}
            style={styles.currentWeatherImage}
          />
          <Text style={{ fontSize: 18 }}>{cityDetail.desc}</Text>
        </View>
      </View>
    );
  };

  const _footer = () => {
    return (
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          *Information provided by OpenWeather
        </Text>
      </View>
    );
  };

  const _renderListItem = (item) => {
    return (
      <View style={styles.forecastItemContainer}>
        <View style={styles.forecastItemSubLeftContainer}>
          <Text style={[styles.forecastItemText, { fontWeight: '600' }]}>
            {item.day}
          </Text>
          <Text style={styles.forecastItemText}>{item.desc}</Text>
        </View>
        <View style={styles.forecastItemSubRightContainer}>
          <Text style={styles.forecastItemText}>{item.high}℃</Text>
          <Text style={styles.forecastItemText}>{item.low}℃</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cityDetail.forecasts}
        refreshControl={
          <RefreshControl
            style={styles.refreshControl}
            refreshing={loading}
            onRefresh={() => dispatch(requestCityDetail(location))}
          />
        }
        ListHeaderComponent={() => _currentWeather()}
        ListFooterComponent={() => _footer()}
        ListEmptyComponent={() => _renderEmptyComponent()}
        keyExtractor={(item, index) => 'cityDetailForecasts' + index.toString()}
        renderItem={({ item }) => _renderListItem(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  currentWeatherContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  currentWeatherSubLeftContainerWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  currentWeatherSubLeftContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentWeatherSubRightContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentWeatherImage: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
  forecastItemContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  forecastItemSubLeftContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 40,
  },
  forecastItemSubRightContainer: {
    width: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  forecastItemText: {
    fontSize: 16,
  },
  refreshControl: {
    backgroundColor: 'transparent',
    tintColor: '#f2c72e',
  },
  footerContainer: {
    marginTop: 20,
  },
  footerText: {
    textAlign: 'center',
    color: 'grey',
  },
  emptyComponentContainer: {
    justifyContent: 'center',
    padding: 20,
  },
});

export default Example;
