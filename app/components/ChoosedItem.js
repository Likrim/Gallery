import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setChoosedImages } from '../actions/ChangeChoosedPhotosActions';
import { values } from '../consts/AsyncStorageValuesNames';

const ChoosedItem = ({item, last, index, choosedImages, setChoosedImages}) => {
  const likeImage = async() => {
    let arr = new Array();
    if(!item.isLiked){
      arr = arr.concat(choosedImages);
      let changedValue = arr[index];
      arr.splice(index, 1);
      changedValue.isLiked = true;
      arr.unshift(changedValue);
      arr.sort((a, b) => {
        if(a.isLiked && b.isLiked) return b.time - a.time;
        if(!a.isLiked || !b.isLiked) return 0
      });
      setChoosedImages(arr);
      await AsyncStorage.setItem(values.ICON_ARRAY, JSON.stringify(arr));
    } else {
      arr = arr.concat(choosedImages);
      let changedValue = arr[index];
      arr.splice(index, 1);
      changedValue.isLiked = false;
      arr.unshift(changedValue);
      arr.sort((a, b) => {
        return b.time - a.time;
      });
      arr.sort((a, b) => {
        if(a.isLiked && !b.isLiked) return -1;
        if(a.isLiked && b.isLiked) return 0;
        if(!a.isLiked && b.isLiked) return 1;
      })
      setChoosedImages(arr);
      await AsyncStorage.setItem(values.ICON_ARRAY, JSON.stringify(arr));
    }
  }

  return (
    <View style={styles.mainBlock}>
      <Image source={{uri: item.uri}} style={styles.image}/>
      <View style={styles.description}>
        <TouchableOpacity onPress={() => likeImage()}>
          <Image 
            source={item.isLiked ? 
            require('../assets/systemIcons/like.png') : 
            require('../assets/systemIcons/dislike.png')} 
            style={styles.likeImage}
          />
        </TouchableOpacity>
        <Text style={styles.timeText}>{moment.unix(item.time).format('DD-MM-YYYY').toString()}</Text>
      </View>
      {index !== last && <View style={styles.separator}/>}
    </View>
  );
}

const mapStateToProps = state => {
  const { choosedImages } = state.choosedPhoto;
  return {choosedImages};
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({setChoosedImages}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ChoosedItem);

const styles = StyleSheet.create({
  mainBlock: {
    flexDirection: 'column',
    width: '100%',
    marginHorizontal: 20,
    marginTop: 20
  },
  image: {
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').width - 40
  },
  description: {
    flexDirection: 'row',
    width: Dimensions.get('window').width - 40,
    justifyContent: 'space-between',
    marginVertical: 5
  },
  separator: {
    height: 3,
    width: Dimensions.get('window').width - 40,
    borderRadius: 20,
    backgroundColor: 'rgba(33, 33, 33, 1)'
  },
  timeText: {
    fontSize: 25,
    color: 'rgba(33, 33, 33, 1)',
    fontFamily: 'EduVICWANTBeginner-Bold',
  },
  likeImage: {
    height: 35,
    width: 35
  }
});