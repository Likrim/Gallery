import React, {useEffect} from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { values } from './app/consts/AsyncStorageValuesNames';
import { setIsLoading } from './app/actions/ChangeIsLoadingActions';
import { setChoosedImages } from './app/actions/ChangeChoosedPhotosActions';
import { getFakeData } from './app/actions/GetFakeDataActions';
import AsyncStorage from "@react-native-async-storage/async-storage";
import TabNavigator from './app/components/TabNavigator';
import LoadingScreen from './app/containers/LoadingScreen';

const App = ({isLoading, setIsLoading, setChoosedImages, getFakeData}) => {
  useEffect(() => {
    const getFakeDataF = async() => {
      await getFakeData();
    }
    const tryAsync = async() => {
      const res = await AsyncStorage.getItem(values.ICON_ARRAY);
      res !== null ? setChoosedImages(JSON.parse(res)) : setChoosedImages(new Array())
    }
    if(isLoading) {
      getFakeDataF()
      tryAsync();
    }
  })

  if(isLoading) return(<LoadingScreen />)

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const mapStateToProps = state => {
  const {isLoading} = state.isLoading;
  return {isLoading};
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setIsLoading,
    setChoosedImages,
    getFakeData
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);

const styles = StyleSheet.create({});