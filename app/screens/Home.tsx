import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Navigation from '../components/common/Navigation';
import { colors, fonts } from '../constant/Config';
import LocationMap from '../components/LocationMap';
import i18n from '../assets/translation/i18n';
import Search from '../components/Search';
import Countries from '../components/Countries';

const Home = () => {
  return (
    <View style={styles.container}>
      <Navigation />
      <LocationMap />
      <View style={styles.searchContainer}>
        <Text style={styles.whereText}>{i18n.t('whereGo')}</Text>
        <Search />
      </View>
      <Countries />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  whereText: {
    fontSize: 16,
    color: colors.black,
    fontFamily: fonts.medium,
    marginBottom: 16,
  },
});

export default Home;
