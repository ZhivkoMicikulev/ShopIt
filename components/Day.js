import React from "react";
import { View,Text,StyleSheet, TouchableOpacity } from "react-native";

const Day=(props)=>{
return(
    <View style={styles.item}>
       
    
            <Text style={styles.itemText}>
           {props.text}
        </Text>
    </View>
)
}

const styles=StyleSheet.create({
        item:{
            backgroundColor:'white',
            padding:15,
            borderRadius:10,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            marginBottom:20
        },
     
    itemText:{
        maxWidth: '80%',
    

    },
})

export default Day;

