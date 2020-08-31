import React from 'react';
import {Text} from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import StackNavigator from './Stack.js';
import {Icon} from 'react-native-elements';



const TabNav = createMaterialBottomTabNavigator();

const Test = ()=>(
	<Text>Hello</Text>
	)

function TabNavigator(){
	return (
		<TabNav.Navigator shifting={true}>
			<TabNav.Screen name="Explore" component={StackNavigator} options={{
				tabBarIcon : ({color})=>{return(
					<Icon name="explore" color={color}/>
					)},
				tabBarColor: '#ff0000'
			}}/>
			<TabNav.Screen name="Test" component={Test} options={{
				tabBarIcon : ({color})=>{return(
					<Icon name="explore" color={color}/>
					)},
				tabBarColor: '#0000ff'
			}}/>
		</TabNav.Navigator>
	)
}

export default TabNavigator;