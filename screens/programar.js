import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import navegaciones from '../navegaciones/StackNavigation1'



const  Programar=({navigation})=> {
    return (
        <View style={styles.container}>
             <Button 
                title="javascript" 
                onPress={()=>navigation.navigate('javascript')}
            />
             <Button 
                title="react" 
                onPress={()=>navigation.navigate('react')}
            />
        </View>
    )
}
export default Programar;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#90EE90',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});
  