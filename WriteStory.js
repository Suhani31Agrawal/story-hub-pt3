import React from 'react';
import { Text, View ,TouchableOpacity , KeyAvoidingView , TextInput , StyleSheet , Image, ToastAndroid  } from 'react-native';
import * as Permissions from 'expo-permissions';
// import { styleSheets } from 'min-document';
import db from '../config'

export default class ReadStoryscreen extends React.Component {
  constructor (props){
    super(props)
    this.state={
     author:'',
     storyText:'',
     title:''
    }
  }

  submitStory=async()=>{
    db.collection('stories').add({
      author:this.state.author,
      storyText:this.state.storyText,
      title:this.state.title
    });
    this.setState({
      author:'',
      storyText:'',
      title:''
    });
    ToastAndroid.show('STORY SUBMITTED', ToastAndroid.SHORT)
  }

 render(){
   return(
     <View styles={this.styles.container}>
       <View>
         <Text style={{ textAlign:'center', fontSize:30, backgroundColor:'yellow'}}>
            StoryHub{''}
         </Text>
       </View>
       <View style={this.styles.inputView}>
         <KeyAvoidingView>
         <TextInput style={styles.inputBox} placeHolder="Title Of Story"/>
           </KeyAvoidingView>
       </View>
       <View style={this.styles.inputView}>
         <KeyAvoidingView>
         <TextInput styles={styles.inputBox} placeholder="Author Of Story"/>
           </KeyAvoidingView>
       </View>
       <KeyAvoidingView>
       <TextInput
       style={styles.storyBox}
       placeHolder="Write Your Story Here"
       />
       </KeyAvoidingView>
       <TouchableOpacity
         style={this.styles.submitButton}
         onPress={this.submitStory}>
           <Text style={this.styles.submitButtonText}>SUBMIT</Text>
       </TouchableOpacity>
     </View>
   )
 }
}
    

  const styles=StyleSheet.create({
  displayText:{
    fontSize:15,
    textDecorationLine:'underline',
  },
  buttonText:{
    fontSize:15,
    textAlign:'center',
    marginTop:10,
  },
  scanButton:{
   backGroundColor:'#2196F3',
   padding:10,
   margin:10,
  },
  inputBox:{
    width:150,
    height:40,
    borderWidth:1.5,
    borderRightWidth:1.5,
    fontSize:20,
    backgroundColor:'white'
  },
  storyBox:{
    width:200,
    height:200,
    borderWidth:1.5,
    borderRightWidth:1.5,
    fontSize:20,
    backgroundColor:'white'
  },
  submitButton:{
    backgroundColor:'#FBC02D',
    width:200,
    height:50
  },
  submitButtonText:{
    padding:10,
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    color:'white'
  },
  scanButton:{
    backgroundColor:'66BB6A',
    width:50,
    borderWidth:1.5,
    borerLeftWidth:0
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'yellow'
    },
  inputView:{
    flexDirection:'row',
    margin:20
  }
})