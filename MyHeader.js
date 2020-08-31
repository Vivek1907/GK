import * as React from 'react';
import {Header, Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native';

const MyHeader = (props)=>{
	return (
		<Header
  			leftComponent={<TouchableOpacity onPress={()=>{props.navigation.toggleDrawer()}}><Icon name="menu"></Icon></TouchableOpacity>}
  			centerComponent={{ text: props.title, style: { color: '#fff'}  }}
  			//rightComponent={{ icon: 'home', color: '#fff' }}
		/>
		)
}

export default MyHeader;