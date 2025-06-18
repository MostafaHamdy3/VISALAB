import React, { useRef } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import { colors, fonts } from '../constant/Config';
import countriesEn from '../assets/countries/countriesEN.json';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width / 5;
const SMALL_SIZE = 54;
const LARGE_SIZE = 80;

const Countries = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <Animated.FlatList
      data={countriesEn}
      horizontal
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      scrollEventThrottle={16}
      snapToInterval={ITEM_WIDTH}
      keyExtractor={item => item.alpha2}
      contentContainerStyle={styles.container}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false },
      )}
      renderItem={({ item, index }) => {
        const inputRange = [
          (index - 2 - 1) * ITEM_WIDTH,
          (index - 2) * ITEM_WIDTH,
          (index - 2 + 1) * ITEM_WIDTH,
        ];

        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [1, LARGE_SIZE / SMALL_SIZE, 1],
          extrapolate: 'clamp',
        });

        const translateY = scrollX.interpolate({
          inputRange,
          outputRange: [0, 14, 0],
          extrapolate: 'clamp',
        });

        const textScale = scrollX.interpolate({
          inputRange,
          outputRange: [1, 1.17, 1],
          extrapolate: 'clamp',
        });

        return (
          <View style={styles.content}>
            <Animated.Image
              style={[
                styles.flagImage,
                {
                  transform: [{ scale }],
                },
              ]}
              source={{
                uri: `https://flagcdn.com/w80/${item.alpha2.toLowerCase()}.png`,
              }}
            />
            <Animated.Text
              style={[
                styles.countryName,
                {
                  transform: [{ translateY }, { scale: textScale }],
                },
              ]}
            >
              {item.name}
            </Animated.Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 140,
    alignItems: 'center',
    backgroundColor: colors.white,
    marginTop: 12,
    paddingVertical: 10,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    elevation: 11,
  },
  content: {
    width: ITEM_WIDTH,
    alignItems: 'center',
  },
  flagImage: {
    width: SMALL_SIZE,
    height: SMALL_SIZE,
    borderRadius: SMALL_SIZE / 2,
    resizeMode: 'cover',
  },
  countryName: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 12,
    fontFamily: fonts.medium,
    color: colors.black,
  },
});

export default Countries;
