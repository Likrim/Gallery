import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

const LoadingScreen = () => {
  return (
    <View style={styles.mainBlock}>
      <LottieView source={require('../assets/loading.json')} autoPlay loop/>
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
}

export default LoadingScreen;

const styles = StyleSheet.create({
  mainBlock: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  loadingText: {
    fontSize: 38,
    color: 'rgba(33, 33, 33, 1)',
    fontFamily: 'EduVICWANTBeginner-Bold',
    marginTop: 165
  }
});