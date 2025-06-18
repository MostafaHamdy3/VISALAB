import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomTabsParamList, RootStackParamList } from './types/Navigator';
import Splash from './screens/Splash';
import Home from './screens/Home';
import Account from './screens/Account';
import Application from './screens/Application';
import { colors } from './constant/Config';
import i18n from './assets/translation/i18n';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabsParamList>();

const getTabBarIcon = (iconSource: any, color: string, size: number) => (
  <Image
    source={iconSource}
    style={{ tintColor: color, width: size, height: size }}
    resizeMode="contain"
  />
);

const tabScreenOptions = {
  headerShown: false,
  tabBarStyle: {
    height: 73,
    backgroundColor: colors.white,
    paddingTop: 6,
  },
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.gray,
  tabBarLabelStyle: {
    fontSize: 14,
  },
};

const BottomTabs = () => (
  <Tab.Navigator screenOptions={tabScreenOptions}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        title: i18n.t('home'),
        tabBarIcon: ({ color, size }) =>
          getTabBarIcon(require('./assets/icons/home.png'), color, size),
      }}
    />
    <Tab.Screen
      name="Application"
      component={Application}
      options={{
        title: i18n.t('applications'),
        tabBarIcon: ({ color, size }) =>
          getTabBarIcon(require('./assets/icons/application.png'), color, size),
      }}
    />
    <Tab.Screen
      name="Account"
      component={Account}
      options={{
        title: i18n.t('account'),
        tabBarIcon: ({ color, size }) =>
          getTabBarIcon(require('./assets/icons/account.png'), color, size),
      }}
    />
  </Tab.Navigator>
);

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Main" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
