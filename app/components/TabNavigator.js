import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Gallery from '../containers/Gallery';
import LoadPhotos from '../containers/LoadPhotos';

const TabNavigator = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator initialRouteName='Gallery'
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {backgroundColor: 'rgba(63, 63, 63, 1)', height: 55}
        }}>
            <Tab.Screen name='Gallery'
                component={Gallery}
                options={{
                    tabBarIcon: ({focused}) => (
                        focused ? 
                        <Image source={require('../assets/systemIcons/activeList.png')} style={styles.listImage}/> :
                        <Image source={require('../assets/systemIcons/unactiveList.png')} style={styles.listImage}/>
                    )
                }}
            />
            <Tab.Screen name='LoadPhotos'
                component={LoadPhotos}
                options={{
                    tabBarIcon: ({focused}) => (
                        focused ?
                        <Image source={require('../assets/systemIcons/activeUploadPhoto.png')} style={styles.pictureImage}/> :
                        <Image source={require('../assets/systemIcons/unactiveUploadPhoto.png')} style={styles.pictureImage}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator;

const styles = StyleSheet.create({
    listImage: {
        height: 38,
        width: 38,
        marginTop: 5
    },
    pictureImage: {
        height: 50,
        width: 50,
        marginTop: 2
    }
});