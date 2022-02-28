import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Day from './components/Day';
import Home from './components/Home';
import TaskDayForm from './components/TaskDayForm';


const Stack = createNativeStackNavigator();

export default function App() {

  const [task,setTask]=useState();
  const [taskItems,setTaskItems]=useState([]);

  const handleAddTask=()=>{
    Keyboard.dismiss();
setTaskItems([...taskItems,task]);
setTask(null);
  }


  const completeTask=(index)=>{
let itemsCopy=[...taskItems];
itemsCopy.splice(index,1);
setTaskItems(itemsCopy);
  }



  return (

    
  <SafeAreaProvider style={styles.container}>
<NavigationContainer >
    <Stack.Navigator screenOptions={{headerShown:false,}}>
      <Stack.Screen  name="Home" component={Home} />
      <Stack.Screen  name="TaskDayForm" component={TaskDayForm} />
    </Stack.Navigator>
    
  </NavigationContainer>
  </SafeAreaProvider>
    
  
  


//     <View style={styles.container}>
//       <View style={styles.taskWrapper}>
// <Text style={styles.sectionTitle}>Today's tasks</Text>
// <View style={styles.items}>
//   {taskItems.map((item,index)=>{
//  return (
//    <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
// <Task  text={item}/>
//    </TouchableOpacity>
// )
// }
//  ) }
 

// </View>
//       </View>

//       <KeyboardAvoidingView 
//       behavior={Platform.OS==='ios'?"padding":"height"}
//       style={styles.writeTaskWrappet}>
//         <TextInput 
//         style={styles.input} 
//         placeholder={'Write your task'} 
//         onChangeText={text=>setTask(text)}
//         value={task}></TextInput>
//         <TouchableOpacity onPress={()=>handleAddTask()}>
//           <View style={styles.addWrapper}>
//             <Text style={styles.addText}>+</Text>
//           </View>
//         </TouchableOpacity>
//         </KeyboardAvoidingView>
//     </View>
  );
}

const styles = StyleSheet.create({
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

    
});
