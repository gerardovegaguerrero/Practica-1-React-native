import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

export default function Java() {
    return (
        <View style={styles.container}>
             <Image
        style={imagen.logo}
        source={require('../java.png')}
      />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFB6C1',
      alignItems: 'center',
      justifyContent: 'space-around',
      
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
  