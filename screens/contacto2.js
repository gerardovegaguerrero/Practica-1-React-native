import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Contacto2() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Contacto 2</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#87CEEB',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
  