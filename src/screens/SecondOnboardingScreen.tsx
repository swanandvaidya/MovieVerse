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

const bgPoster = require('../assets/images/bg_onboarding_2.png');
const bgOnboardingTransparent = require('../assets/images/bg_transparent_2.png');

const SecondOnboardingScreen = () => {
  const navigation = useNavigation();

  const onPressOfNext = () => {
    navigation.navigate(ScreenNames.THIRDONBOARDING);
  };

  const onPressOfBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground source={bgPoster} style={styles.bgPoster}>
      <ImageBackground source={bgOnboardingTransparent} style={styles.bgPoster}>
        <View style={styles.container}>
          <Text style={styles.header}>Discover Movies</Text>
          <Text style={styles.description}>
            Explore a vast collection of movies in all qualities and genres.Find
            your next favourite film with ease
          </Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onPressOfNext}>
            <Text style={styles.btnText}>Next</Text>
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

export default SecondOnboardingScreen;

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
    paddingTop: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    padding: 12,
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: Colors.secondary,
    marginTop: 20,
  },
  btnBorderContainer: {
    width: '100%',
    padding: 12,
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
