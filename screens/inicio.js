import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Meme from '../meme.svg';

export default function Inicio() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>bienvenido</Text>
            <Image
        style={imagen.logo}
        source={require('../meme.svg')}
      />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
      fontWeight: "bold",
       
    },
    titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
});
const imagen = StyleSheet.create({

  logo: {

    alignItems: "center",
     width: 300,
    height: 300,
    resizeMode: 'stretch',
  },
});

  