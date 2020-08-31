import React from 'react';
import {createDrawerNavigator,DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native'
import TabNavigator from './TabNav';
import {TouchableOpacity, Text, View} from 'react-native'
import {Icon, Button} from 'react-native-elements';
import firebase from '../config';

const DrawerNav = createDrawerNavigator();

function CustomDrawer(props){
	return (
	 <View style={{flex:1}}>
	 <View style={{flex: 0.8, marginTop: 40}}>
      <DrawerItemList {...props} />
      </View>
      <View style={{flex:0.2, justifyContent:'flex-end', paddingBottom: 30}}>
      <Button title="Log Out" buttonStyle={{marginHorizontal: 10, borderRadius: 5, height: 50, marginTop:200}} onPress={()=>{
      	firebase.auth().signOut();
      }}/>
      </View>
    </View>
		)
}

function DrawerNavigation(){
	return (
		<NavigationContainer>
			<DrawerNav.Navigator drawerContent={CustomDrawer}>
				<DrawerNav.Screen name="Home" component={TabNavigator} options={{
					drawerIcon: ()=>(
						<Icon name="home"/>
					)
				}} />
			</DrawerNav.Navigator>

		</NavigationContainer>
	)
}

export default DrawerNavigation;