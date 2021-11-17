import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Github() {
    return (
        <View style={styles.container}>
       <Image
        style={imagen.logo}
        source={require('../github.png')}
      />
            <Text style={styles.titleText}>@danielasanchez</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FAEBD7',
      alignItems: 'center',
      justifyContent: 'space-around',
      fontWeight: "bold"
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

  