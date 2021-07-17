import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

const Task = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}><Text>{props.index+1})</Text></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.icon}><Icon
  name='trash'
  type='font-awesome'
  color="black"
   /></View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    color:"black",

    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
  icon:{
    width:24,
    height:24,
  }
});

export default Task;
