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

const bgPoster = require('../assets/images/bg_poster.png');
const bgOnboardingTransparent = require('../assets/images/bg_transparent_1.png');

const FirstOnboardingScreen = () => {
  const navigation = useNavigation();

  const onPressOfExploreNow = () => {
    navigation.navigate(ScreenNames.SECONDONBOARDING);
  };

  return (
    <ImageBackground source={bgPoster} style={styles.bgPoster}>
      <ImageBackground source={bgOnboardingTransparent} style={styles.bgPoster}>
        <View style={styles.messageContainer}>
          <Text style={styles.header}>Find Your Next</Text>
          <Text style={styles.header}>Favourite Movie Here</Text>
          <Text style={styles.description}>
            Get access to a huge library of movies to suit all tastes.You will
            surely like it.
          </Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onPressOfExploreNow}>
            <Text style={styles.btnText}>Explore Now</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};

export default FirstOnboardingScreen;

const styles = StyleSheet.create({
  bgPoster: {
    flex: 1,
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    color: Colors.white,
    fontFamily: Fonts.PoppinsSemiBold,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: Colors.gray,
    paddingTop: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    padding: 14,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.secondary,
    marginVertical: 24,
  },
  btnText: {
    color: Colors.black,
    fontSize: 18,
    fontFamily: Fonts.PoppinsRegular,
    fontWeight: '500',
  },
});
