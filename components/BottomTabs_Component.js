import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Pressable,
  TouchableWithoutFeedback
} from 'react-native';

import { customDimensions, colorPalette } from '../utils/index';


const BottomTabs_Component = (props) => {
  const { selectedTab, overidingStyles } = props;
  return (
    <>
      <View style={[styles.containerStyle, overidingStyles]}>
        <TouchableOpacity style={[styles.touchableoneStyle,{backgroundColor: selectedTab === 1 ? colorPalette.blue : colorPalette.white}]}
          onPress={() => props.tabSelect(1)}>
          <Text style ={ styles.textStyle} >Tasks Todo</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={[styles.touchableoneStyle,{backgroundColor: selectedTab === 2 ? colorPalette.blue : colorPalette.white}]}
          onPress={() => props.tabSelect(2)}>
          <Text style ={ styles.textStyle}>Tasks Done</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={[styles.touchableThreeStyle]}
        onPress={() => props.modalVisibility(true)}>
          <Text style = {styles.addTextStyle}>+</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    width: customDimensions.window_Width,
    height: customDimensions.header_Height,
    backgroundColor: colorPalette.white,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 'auto'
  },
  touchableoneStyle :{
    width: customDimensions.window_Width * 0.5, height: "100%", borderRightWidth: 2,
    borderRightColor: "black",justifyContent: "center", alignItems: "center"
  },
  touchableTwoStyle :{
    width: customDimensions.window_Width * 0.5, height: "100%",justifyContent: "center", alignItems: "center"
  },
  touchableThreeStyle :{
    position: "absolute", bottom: 0, marginBottom: customDimensions.header_Height * 0.5,
    height: 60, width: 60, backgroundColor: colorPalette.red, alignSelf: "center",
    borderRadius: 60 / 2
  },
  textStyle : {
    fontSize: 20,
    color: colorPalette.black
  },
  addTextStyle : {
    marginLeft : 16, fontSize : 45, color: colorPalette.white
  }
});

export default BottomTabs_Component;