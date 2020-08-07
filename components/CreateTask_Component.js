import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Dimensions,
  Alert
} from 'react-native';
import Modal from 'react-native-modal';

import { customDimensions, colorPalette, Strings } from '../utils/index';




const CreateTask_Component = (props) => {
  const [inputText,setInputText] = useState("");
  const {modalVisible,todotasksArrayval} = props
  
  function alertMethod(Title,message){
    Alert.alert(
      Title,
      message,
      [
          {
              text: 'OK',
              onPress: () => console.log('OK pressed')
          }
      ],
      { cancelable: true },
  );
  }

  function addTaskMethod(){
    if(inputText !== ""){
      let date = new Date();
      
      if(todotasksArrayval.length > 0){
       let valuepresent =  todotasksArrayval.some((item) => {
          return item.taskName == inputText
        })
        if(valuepresent){
          alertMethod("Task Already Added.","")
        }else{
          props.modalVisibility(false)
          props.newTask({taskName:inputText, taskId: date});
        }
      }else{
        props.modalVisibility(false)
        props.newTask({taskName:inputText, taskId: date});
      }
      
     
    }
  }

  return (
    <>
   
     <Modal isVisible={modalVisible}
     animationIn = "fadeInUp"
     onBackdropPress = {() => props.modalVisibility(false)}>
        <View style={styles.modalViewStyle}>
          <Text style = {styles.textStyle}>{Strings.enterTask}</Text>
         <TextInput
         style = {styles.textInputStyle}
         placeholder = {Strings.placeHolderText}
         autoCorrect = {false}
         onChangeText = {(value) => setInputText(value)}
         value={inputText}/>
         <Button title = {Strings.addTask}
         onPress = {() => addTaskMethod()}></Button>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
    modalViewStyle : {
      height : customDimensions.window_Height * 0.2, width : "100%", backgroundColor : "white",
      justifyContent : "center", alignItems : "center", borderRadius : 10
    },
    textInputStyle : {
      height : 50, width : "80%", padding : 5, borderRadius :5,
      borderWidth : 2, borderColor : colorPalette.black, marginVertical : 20
    },
    textStyle : {
      fontSize : 20, color : colorPalette.black
    }
});

export default CreateTask_Component;