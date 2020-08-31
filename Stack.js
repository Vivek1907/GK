import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ListScreen from '../screens/ListScreen.js';
import {Text, View, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import * as Linking from 'expo-linking'

const Stack = createStackNavigator();

const Test = ({route, navigation})=>(
	<View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
		<Button title="Go to Wikipedia" onPress={()=>{
			Linking.openURL(route.params.item.wiki);
		}}/>
		<Button title="Go to youtube" onPress={()=>{
			Linking.openURL(route.params.item.youtube);
		}}/>
		</View>
	)

function StackNavigator(){
	return (
		<Stack.Navigator>
			<Stack.Screen name="Explore" component={ListScreen} options={{headerShown: false}}/>
			<Stack.Screen name="TestStack" component={Test} options={({ route }) => ({ title: route.params.item.title })}/>
		</Stack.Navigator>
		)
}

export default StackNavigator;