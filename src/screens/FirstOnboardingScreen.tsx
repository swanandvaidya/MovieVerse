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

const bgPoster = require('../assets/images/bg_poster.png');

const FirstOnboardingScreen = () => {
  return (
    <ImageBackground source={bgPoster} style={styles.bgPoster}>
      <View style={styles.messageContainer}>
        <Text style={styles.header}>Find Your Next</Text>
        <Text style={styles.header}>Favourite Movie Here</Text>
        <Text style={styles.description}>
          Get access to a huge library of movies to suit all tastes.You will
          surely like it.
        </Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.btnText}>Explore Now</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default FirstOnboardingScreen;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  bgPoster: {
    flex: 1,
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 30,
  },
  header: {
    fontSize: 30,
    color: Colors.white,
    fontFamily: Fonts.PoppinsSemiBold,
    textAlign: 'center',
    paddingVertical: 4,
  },
  description: {
    fontSize: 22,
    color: Colors.gray,
    paddingTop: 24,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    padding: 14,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.secondary,
    marginVertical: 30,
  },
  btnText: {
    color: Colors.black,
    fontSize: 18,
    fontFamily: Fonts.PoppinsRegular,
    fontWeight: '500',
  },
});
