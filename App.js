/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import type {Node} from 'react';
import React, {useState} from 'react';
import { KeyboardAvoidingView, ImageBackground,StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { Icon,Header } from 'react-native-elements';
import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Task from './component';
const image = { uri: "https://i.pinimg.com/564x/d0/f3/23/d0f323701fb11008acb7a81f8698dff9.jpg" };

const App: () => Node = () => {
  
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }
  return (
    <View style={styles.container}>
    <ImageBackground source={image} style={styles.image} resizeMode="cover">
    <Header
  
  
  centerComponent={{ text: 'NHK?', style: { color: '#fff' } }}

  
/>
    <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >


      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle} >Tasks</Text>
        <View style={styles.items}>
          
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} index={index}/> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

    
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>



    </ImageBackground>
      
      
    </View>
   
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    alignItems:"center",
    justifyContent:"center",
    color:"white",
  },
  items: {
    marginTop: 30,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});

export default App;
