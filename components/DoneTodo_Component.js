import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button, ScrollView
} from 'react-native';

import { customDimensions, colorPalette, Strings } from '../utils/index';



const DoneTodo_Component = (props) => {
    const { doneTasksArray, overidingStyles } = props;
 

    if(doneTasksArray.length > 0){
        return (
            <>
                <View style={[styles.containerStyle, overidingStyles]}>
                <ScrollView>
                    {doneTasksArray.map((item, i) =>
                        <View key={i} style={styles.listViewStyle}>
                            <Text style={styles.textStyle}
                                numberOfLines={1}>{item.taskName}</Text>
    
                            <View style={{ flexDirection: "row" }}>
                                <Button
                                    title={Strings.uncomplete}
                                    onPress={() => props.taskUndo(item.taskId)} />
                            </View>
                        </View>
                    )}
    </ScrollView>
    
    
                </View>
            </>
        );
    }else{
        return (
        <View style={[styles.containerStyle, {justifyContent : "center",
        alignItems : "center"}]}>
            <Text style = {{ fontSize : 20, color: colorPalette.black}}>No Tasks completed.</Text>
            </View>
        )
    }
    
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: colorPalette.lightGrey,
        padding: 8,
    },
    listViewStyle: {
        flexDirection: "row",
        backgroundColor: colorPalette.white, margin: 5, borderRadius: 10,
        height: 50, alignItems: "center", padding: 8, justifyContent: "space-between"
    },
    textStyle : {
        width : "60%", fontSize : 18, color : colorPalette.black
    }
});

export default DoneTodo_Component;