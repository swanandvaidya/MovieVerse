import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Colors from '../themes/Colors';
import Fonts from '../themes/Fonts';
import {useNavigation} from '@react-navigation/native';
import ScreenNames from '../constants/ScreenNames';

const appIcon = require('../assets/images/app_icon.png');

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace(ScreenNames.FIRSTONBOARDING);
    }, 1500);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={appIcon} style={styles.appIcon} />
      <Text style={styles.welcomeText}>Welcome to MultiVerse</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appIcon: {
    width: 100,
    height: 100,
  },
  welcomeText: {
    color: Colors.white,
    fontSize: 24,
    paddingVertical: 30,
    fontFamily: Fonts.PoppinsRegular,
  },
});
