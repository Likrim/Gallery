import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from '@rneui/themed';
import { connect } from 'react-redux';
import ClearGallery from '../components/ClearGallery';
import UploadedPhotos from '../components/UploadedPhotos';

const Gallery = ({choosedImages}) => {
  return (
    <View style={styles.mainBlock}>
      <Header 
        containerStyle={styles.header}
        backgroundColor='rgba(130, 136, 150, 1)'
      />
      {choosedImages.length == 0 ? <ClearGallery /> : <UploadedPhotos />}
    </View>
  );
}

const mapStateToProps = state => {
  const { choosedImages } = state.choosedPhoto;
  return {choosedImages};
}

export default connect(mapStateToProps)(Gallery);

const styles = StyleSheet.create({
    mainBlock: {
      height: '100%',
      width: '100%'
    },
    header: {
      width: '100%',
      height: 90
    }
});