import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { Calendar } from 'react-native-calendars'

const TaskDayForm =()=>{
  
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
   <Text style={styles.sectionTitle}>Chose your date for tasks</Text>
<Calendar style={styles.calendar}/>
        </View>
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#add8e6',
      },
      wrapper:{
        paddingTop:80,
        paddingHorizontal:20,
      },
      sectionTitle:{
        fontSize:24,
        fontWeight:'bold',
        fontFamily: "sans-serif-light"
      },
      calendar:{
          position:'absolute',
          marginTop:'40%',
        alignSelf:'center',
          width:'100%'
          
      }
})

  export default TaskDayForm;
