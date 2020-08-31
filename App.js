import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigation from './components/MyDrawer'
import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import {createSwitchNavigator, createAppContainer} from 'react-navigation'

const Switch = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  ListScreen: DrawerNavigation
});
const AppContainer = createAppContainer(Switch);

export default class App extends React.Component{
  render(){
  return (
    <View style={styles.container}>
    <AppContainer/>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
