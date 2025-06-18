import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import i18n from '../assets/translation/i18n'
import { colors, fonts } from '../constant/Config'

const LocationMap = () => {
  const onApplyNow = () => {};

  return (
    <ImageBackground
      source={require('../assets/icons/map.png')}
      style={styles.mapImage}
    >
      <View style={styles.container}>
        <Image
          source={require('../assets/icons/border.png')}
          style={styles.borderStyle}
        />
        <View style={styles.content}>
          <Text style={styles.visaText}>{i18n.t("visaWizard")}</Text>
          <Text style={styles.visaDescText}>"{i18n.t("visaDesc")}"</Text>
          <TouchableOpacity
            style={styles.applyBtn}
            onPress={onApplyNow}
          >
            <Text style={styles.applyText}>{i18n.t("applyNow")}</Text>
          </TouchableOpacity>
          
        </View>
      </View>
      <Image 
        source={require('../assets/icons/flag.png')} 
        style={styles.flag}
      />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  mapImage: {
    resizeMode: 'cover',
    width: '100%',
    height: 206,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
  },
  container: {
    width: '92%',
    alignSelf: 'center',
    zIndex: 1,
  },
  borderStyle: {
    position: 'absolute',
    top: -44,
    left: -42,
  },
  content: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  visaText: {
    color: colors.primary,
    fontSize: 18,
    fontFamily: fonts.medium,
  },
  visaDescText: {
    color: colors.gray,
    fontSize: 14,
    fontFamily: fonts.medium,
    marginTop: 4,
    marginBottom: 12,
  },
  applyBtn: {
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 16,
  },
  applyText: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.white,
  },
  flag: {
    position: 'absolute',
    width: 70,
    height: 70,
    top: -16,
    right: 14,
  }
})

export default LocationMap
