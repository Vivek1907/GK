import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import firebase from 'firebase';

export default class LoginScreen extends React.Component{
	render(){
		return(
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<TouchableOpacity onPress={()=>{firebase.auth().signInAnonymously()}}>
				<Text>
					Click Me
				</Text>
				</TouchableOpacity>
			</View>
			)
	}
}