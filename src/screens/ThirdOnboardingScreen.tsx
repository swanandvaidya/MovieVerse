import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../themes/Colors';
import Fonts from '../themes/Fonts';
import {useNavigation} from '@react-navigation/native';
import ScreenNames from '../constants/ScreenNames';

const bgPoster = require('../assets/images/bg_onboarding_3.png');
const bgOnboardingTransparent = require('../assets/images/bg_transparent_3.png');

const ThirdOnboardingScreen = () => {
  const navigation = useNavigation();

  const onPressOfFinish = () => {
    navigation.reset({
      index: 0,
      routes: [{name: ScreenNames.HOME}],
    });
  };

  const onPressOfBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={bgPoster}
      style={styles.bgPoster}
      resizeMode="cover">
      <ImageBackground source={bgOnboardingTransparent} style={styles.bgPoster}>
        <View style={styles.container}>
          <Text style={styles.header}>Explore All Genres</Text>
          <Text style={styles.description}>
            Discover movies from every genre, in all available qualities.Find
            something new and exciting to watch every day.
          </Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onPressOfFinish}>
            <Text style={styles.btnText}>Finish</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnBorderContainer}
            onPress={onPressOfBack}>
            <Text style={styles.btnBorderText}>Back</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};

export default ThirdOnboardingScreen;

const styles = StyleSheet.create({
  bgPoster: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: Colors.blackWithOpacity,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  header: {
    fontSize: 24,
    color: Colors.white,
    fontFamily: Fonts.PoppinsSemiBold,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: Colors.white,
    paddingTop: 14,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    padding: 14,
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: Colors.secondary,
    marginTop: 20,
  },
  btnBorderContainer: {
    width: '100%',
    padding: 14,
    alignItems: 'center',
    borderRadius: 14,
    borderColor: Colors.secondary,
    borderWidth: 2,
    backgroundColor: Colors.blackWithOpacity,
    marginTop: 14,
  },
  btnText: {
    color: Colors.black,
    fontSize: 16,
    fontFamily: Fonts.PoppinsRegular,
    fontWeight: '500',
  },
  btnBorderText: {
    color: Colors.secondary,
    fontSize: 16,
    fontFamily: Fonts.PoppinsRegular,
    fontWeight: '500',
  },
});
