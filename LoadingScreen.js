import * as React from 'react';
import {View,ActivityIndicator} from 'react-native';
import firebase from 'firebase';

export default class LoadingScreen extends React.Component{
	componentDidMount(){
		firebase.auth().onAuthStateChanged((user)=>{
			if(user){
				this.props.navigation.navigate('ListScreen');
			}
			else{
				this.props.navigation.navigate('LoginScreen');
			}
		})
	}
	render(){
		return (
			<View style={{flex: 1, justifyContent:'center',alignItems:'center'}}>
			<ActivityIndicator size={70} color="blue"/>
			</View>
			)
	}
}