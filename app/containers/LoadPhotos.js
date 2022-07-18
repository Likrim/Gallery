import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '@rneui/themed';
import CameraUploadPhoto from '../components/CameraUploadPhoto';
import GalleryUploadPhoto from '../components/GalleryUploadPhoto';

const LoadPhotos = () => {
  return (
    <View style={styles.mainBlock}>
      <Header 
        containerStyle={styles.header}
        backgroundColor='rgba(130, 136, 150, 1)'
      />
      <View style={styles.contentBlock}>
        <Text style={styles.mainText}>UPLOAD PHOTOS</Text>
        <View style={styles.buttonBlock}>
          <CameraUploadPhoto />
          <GalleryUploadPhoto />
        </View>
      </View>
    </View>
  );
}

export default LoadPhotos;

const styles = StyleSheet.create({
  mainBlock: {
    width: '100%',
    height: '100%'
  },
  contentBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonBlock: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  mainText: {
    fontSize: 28,
    color: 'rgba(33, 33, 33, 1)',
    fontFamily: 'EduVICWANTBeginner-Bold',
    marginBottom: 20
  },
  header: {
    width: '100%',
    height: 90
  }
});