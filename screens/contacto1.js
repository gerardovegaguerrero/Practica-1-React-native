import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Constants from 'expo-constants';
import Contacto2 from './contacto2'



const Tab =  createMaterialTopTabNavigator();


export default function Contacto1() {
    return (
         <View style={styles.container}>
          <Text style={styles.titleText}>Contacto 1</Text>
       
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#87CEEB',
      alignItems: 'center',
      justifyContent: 'space-around',
      fontWeight: "bold"
    },
     titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
  