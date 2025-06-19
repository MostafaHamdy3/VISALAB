import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';

import i18n from '../../assets/translation/i18n';
import { colors, fonts } from '../../constant/Config';

const Navigation = () => {
  const onChangeLanguage = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{i18n.t('welcome')}</Text>
      <Image
        source={require('../../assets/icons/logo.png')}
        style={styles.logo}
      />
      <TouchableOpacity
        style={styles.langContainer}
        onPress={onChangeLanguage}
        activeOpacity={0.8}
      >
        <Image
          source={require('../../assets/icons/language.png')}
          style={styles.langIcon}
        />
        <Text style={styles.langText}>AR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 59,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    elevation: 16,
    ...Platform.select({
      ios: {
        marginTop: 54,
      },
    }),
  },
  welcome: {
    color: colors.black,
    fontSize: 16,
    fontFamily: fonts.medium,
  },
  logo: {
    width: 46,
    height: 46,
  },
  langContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  langIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  langText: {
    color: colors.primary,
    fontSize: 16,
    fontFamily: fonts.medium,
  },
});

export default Navigation;
