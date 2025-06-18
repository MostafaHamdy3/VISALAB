import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Application = () => {
  return (
    <View style={styles.container}>
      <Text>Application</Text>
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

export default Application;
