import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { colors, fonts } from '../constant/Config';
import { ScreenProps } from '../types/Navigator';
import i18n from '../assets/translation/i18n';

const Splash = ({ navigation }: ScreenProps<'Splash'>) => {
  const openHome = () => {
    navigation.navigate('Main');
  };

  const onLogin = () => {};

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/icons/CountriesFlags.png')}
        style={styles.countriesFlagsImg}
      />
      <View style={styles.content}>
        <Image
          source={require('../assets/icons/company.png')}
          style={styles.logo}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.getStartedButton}
            onPress={openHome}
            activeOpacity={0.8}
          >
            <Text style={styles.getStartedText}>{i18n.t('getStart')}</Text>
          </TouchableOpacity>
          <Text style={styles.loginPrompt}>{i18n.t('haveAccount')}</Text>
          <TouchableOpacity onPress={onLogin}>
            <Text style={styles.loginLink}>{i18n.t('login')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  countriesFlagsImg: {
    position: 'absolute',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 246,
    height: 86,
    marginBottom: 16,
    resizeMode: 'contain',
  },
  buttonContainer: {
    width: '86%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 48,
  },
  getStartedButton: {
    width: '100%',
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 16,
    marginBottom: 20,
  },
  getStartedText: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.primary,
  },
  loginPrompt: {
    fontSize: 18,
    fontFamily: fonts.medium,
    color: colors.white,
    marginBottom: 8,
  },
  loginLink: {
    textAlign: 'center',
    fontFamily: fonts.medium,
    fontSize: 18,
    color: colors.secondary,
    textDecorationLine: 'underline',
  },
});

export default Splash;
