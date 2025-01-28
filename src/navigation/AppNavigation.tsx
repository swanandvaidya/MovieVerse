import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ScreenNames from '../constants/ScreenNames';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreenNames.SPLASH}
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#282A28',
          },
          headerTintColor: '#FFFFFF',
        }}>
        <Stack.Screen
          options={{headerShown: false}}
          name={ScreenNames.SPLASH}
          component={SplashScreen}></Stack.Screen>
        <Stack.Screen
          name={ScreenNames.HOME}
          component={HomeScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
