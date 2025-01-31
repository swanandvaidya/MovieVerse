import {
  NativeModules,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ScreenNames from '../constants/ScreenNames';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import FirstOnboardingScreen from '../screens/FirstOnboardingScreen';
import SecondOnboardingScreen from '../screens/SecondOnboardingScreen';
import ThirdOnboardingScreen from '../screens/ThirdOnboardingScreen';
import Colors from '../themes/Colors';
import SystemNavigationBar from 'react-native-system-navigation-bar';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  useEffect(() => {
    SystemNavigationBar.navigationHide();
  }, []);
  return (
    <NavigationContainer>
      {/* <StatusBar hidden={true}></StatusBar> */}
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
