import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Splash: undefined;
  Main: undefined;
};

export type BottomTabsParamList = {
  Home: undefined;
  Application: undefined;
  Account: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type ScreenProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
};
