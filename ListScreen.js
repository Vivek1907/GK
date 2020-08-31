import * as React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements'
import * as Linking from 'expo-linking';
import firebase from '../config';
import 'firebase/firestore';
import MyHeader from '../components/MyHeader';

export default class ListScreen extends React.Component{

  constructor(){
    super();
    this.state = {
      itemsList: [],
      subTopics: [],
      subName: '',
      clicked: '',
      allSubTopics: '',
      allSubName: '',
      subClicked: ''
    }
  }

  componentDidMount(){
    firebase.firestore().collection("content").onSnapshot((snapshot)=>{
      var temp = [];
      snapshot.docs.map((doc)=>{
        var id = doc.id;
        temp.push(id);
        this.setState({
          itemsList: temp
        })
      })
    })
  }

  getData(item){
    firebase.firestore().collection('content').doc(item).onSnapshot((doc) => {
        this.setState({
          subTopics: doc.data().SubTopics,
          subName: item,
        })
  });

  
}

  getSubData(item){
     firebase.firestore().collection(item).onSnapshot((snapshot)=>{
        var temp = [];
        snapshot.docs.map((doc)=>{
          temp.push(doc.data());
          this.setState({
            allSubTopics: temp,
            allSubName: item
          })
        })
      });
  }

  renderItem = ( {item, i} )=>{
  return(
    <View>
    <ListItem key={i} id={i} bottomDivider onPress={()=>{
      if(this.state.clicked != item){
      this.setState({
        clicked: item,
        subTopics: [],
        subName: '',
      })
    }
    else{
      this.setState({
        clicked: '',
        subTopics: [],
        subName: '',
      })
    }
      if(this.state.clicked != item){
        this.getData(item);
      }
      else if(this.state.clicked == ''){
        this.setState({

        })
      }
    }}>
      <ListItem.Content>
        <ListItem.Title style={{fontWeight: 'bold'}}>
          {item}
        </ListItem.Title>
        </ListItem.Content>
    </ListItem>
    {
      this.state.subName == item ? (
        this.state.subTopics.map((item)=>{
          return (
            <View>
            <ListItem bottomDivider onPress={()=>{
                if(this.state.subClicked != item){
                  this.setState({
                    subClicked: item,
                    allSubTopics: [],
                    allSubName: '',
                   })
                     }
                else{
                 this.setState({
                    subClicked: '',
                    allSubTopics: [],
                    allSubName: '',
                 })
               }
               if(this.state.subClicked != item){
                this.getSubData(item);
              }
               else if(this.state.subClicked == ''){
                this.setState({

                })
      }
    }}>
      <ListItem.Content style={{height: 20}}>
        <ListItem.Title style={{position: 'absolute', left: 20}}>
          {item}
        </ListItem.Title>
        </ListItem.Content>
    </ListItem>
        {
          this.state.allSubName == item ? (
              this.state.allSubTopics.map((item)=>{
                return (
                    <ListItem bottomDivider onPress={()=>{
                      this.props.navigation.navigate('TestStack', {
                        item: item
                      })
                    }}>
                      <ListItem.Content style={{height: 20}}>
                        <ListItem.Title style={{position:'absolute', left: 40}}>
                          {item.title}
                        </ListItem.Title>
                      </ListItem.Content>
                    </ListItem>
                  )
              })
            ): (
              null
            )
        }
    </View>
            )
        }
        )
        ) : (null)
    }

    </View>
    )
  }

  Touch(){
    return(
      <TouchableOpacity style={{position:'absolute', right: 10, backgroundColor: '#3498db', width: 90, height: 35, alignItems: 'center', justifyContent:'center'}}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
        Learn
        </Text>
        </TouchableOpacity>
)
  }



  render(){


 
  return (
    <View style={{flex:1}}>
    <MyHeader title="Explore" navigation={this.props.navigation}/>
          {
            this.state.itemsList.length === 0
            ?(
              <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
              <ActivityIndicator size="large"/>
              </View>
            )
            :(
              <View>
              <FlatList
                keyExtractor={(item, index) => {
                  return index.toString()
                }}
                data={this.state.itemsList}
                renderItem={this.renderItem}
              />
              </View>
            )
          }
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