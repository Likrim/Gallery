import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import moment from 'moment';
import ImageCropPicker from 'react-native-image-crop-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setChoosedImages } from '../actions/ChangeChoosedPhotosActions';
import { values } from '../consts/AsyncStorageValuesNames';

const GalleryUploadPhoto = ({choosedImages, setChoosedImages}) => {
    const changeUploadedPhotos = async(value) => {
        let arr = new Array();
        arr = arr.concat(choosedImages);
        const obj = {
            uri: value.path,
            time: moment().unix(),
            isLiked: false,
            id: arr.length + 1
        }
        arr.unshift(obj);
        arr.sort((a, b) => {
            if(a.isLiked && !b.isLiked) return -1;
            if(!a.isLiked && b.isLiked) return 1;
            if(a.isLiked && b.isLiked) return 0;
        })
        setChoosedImages(arr);
        await AsyncStorage.setItem(values.ICON_ARRAY, JSON.stringify(arr));
    }

    return (
        <TouchableOpacity onPress={() => {
            ImageCropPicker.openPicker({
                height: 300,
                width: 300,
                cropping: true
            }).then((image) => {
                if(image !== null) changeUploadedPhotos(image);
            })
        }} style={styles.button}>
            <Image source={require('../assets/systemIcons/gallery.png')} style={styles.galleryButtonImage}/>
        </TouchableOpacity>
    );
}

const mapStateToProps = state => {
    const {choosedImages} = state.choosedPhoto;
    return {choosedImages};
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({setChoosedImages}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(GalleryUploadPhoto);

const styles = StyleSheet.create({
    button: {
        height: 150,
        width: 150,
        backgroundColor: 'lightgray',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
      },
      galleryButtonImage: {
        height: 135,
        width: 135
      }
});