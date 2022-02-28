import React from "react";
import { View,Text,StyleSheet, TouchableOpacity } from "react-native";
import Day from "./Day";
const Home=({navigation})=>{
return(
    <View style={styles.container}>
<View style={styles.taskWrapper}>
   <Text style={styles.sectionTitle}>Your days with tasks</Text>
   <View style={styles.items}>
     <Day text={'22.01.2022 Monday'}></Day>
   </View>

   
</View>
<View style={styles.addWrapper}>
<TouchableOpacity style={styles.addButton} onPress={()=> navigation.navigate('TaskDayForm')}>
     <Text>+</Text>
   </TouchableOpacity>
</View>
    </View>

)
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#add8e6',
      },
    taskWrapper:{
        paddingTop:80,
        paddingHorizontal:20,
      },
      sectionTitle:{
        fontSize:24,
        fontWeight:'bold',
        fontFamily: "sans-serif-light"
      },
      items:{
    marginTop: 30,
      },
      addWrapper:{
        position: 'absolute',
        bottom:60,
        width: '100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center'
      },
      addButton:{
        width:60,
        height:60,
        backgroundColor:"white",
        borderRadius:60,
        justifyContent: 'center',
        alignItems:'center',
        borderColor:'#c0c0c0',
        borderWidth:1
      }
})

export default Home;

