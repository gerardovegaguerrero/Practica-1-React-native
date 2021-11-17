import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Acerca de...</Text>
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
     titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
});
  