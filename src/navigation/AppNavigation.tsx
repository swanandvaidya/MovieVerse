import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ScreenNames from '../constants/ScreenNames';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import FirstOnboardingScreen from '../screens/FirstOnboardingScreen';
import SecondOnboardingScreen from '../screens/SecondOnboardingScreen';
import ThirdOnboardingScreen from '../screens/ThirdOnboardingScreen';
import Colors from '../themes/Colors';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreenNames.SPLASH}
        screenOptions={{
          headerShown: true,
          headerBackTitle: '',
          headerBackButtonDisplayMode: 'minimal',
          headerStyle: {
            backgroundColor: Colors.black,
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
        <Stack.Screen
          options={{headerShown: false}}
          name={ScreenNames.FIRSTONBOARDING}
          component={FirstOnboardingScreen}></Stack.Screen>
        <Stack.Screen
          options={{headerShown: false}}
          name={ScreenNames.SECONDONBOARDING}
          component={SecondOnboardingScreen}></Stack.Screen>
        <Stack.Screen
          options={{headerShown: false}}
          name={ScreenNames.THIRDONBOARDING}
          component={ThirdOnboardingScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
