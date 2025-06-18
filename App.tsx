import { StatusBar, StyleSheet, View } from 'react-native';

import { AppNavigator } from './app/AppNavigator';

function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
