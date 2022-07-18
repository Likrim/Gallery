import React from 'react';
import { StyleSheet, TouchableOpacity, Image, View, Text } from 'react-native';
import moment from 'moment';
import ImageCropPicker from 'react-native-image-crop-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setChoosedImages } from '../actions/ChangeChoosedPhotosActions';
import { values } from '../consts/AsyncStorageValuesNames';

const CameraUploadPhoto = ({choosedImages, setChoosedImages}) => {
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
            ImageCropPicker.openCamera({
                height: 300,
                width: 300,
                cropping: true
            }).then((image) => {
                if(image !== null) changeUploadedPhotos(image);
            })
        }} style={styles.button}>
            <Image source={require('../assets/systemIcons/camera.png')} style={styles.cameraButtonImage}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CameraUploadPhoto);

const styles = StyleSheet.create({
    button: {
        height: 150,
        width: 150,
        backgroundColor: 'lightgray',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cameraButtonImage: {
        height: 150,
        width: 150
    },
    tmpText: {
        fontSize: 18,
        color: 'black',
        fontFamily: 'EduVICWANTBeginner-Bold'
    }
});