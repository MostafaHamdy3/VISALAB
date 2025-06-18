import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';

import { colors } from '../constant/Config';

const Search = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <View style={styles.searchContainer}>
      <Image
        source={require('../assets/icons/search.png')}
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.searchInput}
        placeholder="Search Here...."
        placeholderTextColor={colors.gray}
        value={searchKeyword}
        onChangeText={setSearchKeyword}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: colors.white,
    borderRadius: 39,
    paddingHorizontal: 16,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    elevation: 2,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: colors.black,
  },
});

export default Search;
