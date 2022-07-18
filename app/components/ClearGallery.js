import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ClearGallery = () => {
  return (
    <View style={styles.mainBlock}>
        <Image source={require('../assets/systemIcons/clearGallery.png')} style={styles.image}/>
        <Text style={styles.text}>NO ONE PHOTO UPLOADED</Text>
    </View>
  )
}

export default ClearGallery;

const styles = StyleSheet.create({
    mainBlock: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 28,
        color: 'rgba(33, 33, 33, 1)',
        fontFamily: 'EduVICWANTBeginner-Bold'
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20
    }
});