import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ChoosedItem from './ChoosedItem';

const UploadedPhotos = ({choosedImages}) => {
  return (
    <View style={styles.mainBlock}>
      <FlatList 
        data={choosedImages}
        renderItem={({item, index}) => <ChoosedItem item={item} last={choosedImages.length - 1} index={index}/>}
      />
    </View>
  );
}

const mapStateToProps = state => {
    const {choosedImages} = state.choosedPhoto;
    return {choosedImages};
}

export default connect(mapStateToProps)(UploadedPhotos);

const styles = StyleSheet.create({
    mainBlock: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});