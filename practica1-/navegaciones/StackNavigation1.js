import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeSceen';
import DetailsScreen from '../screens/DetailsScreen';
import AnotherScreen from '../screens/AnotherSreen';
import Javascript from '../screens/java'
import IReact from '../screens/react'
import Progra from '../screens/programar'

const Stack = createStackNavigator();

export default function StackNavigation1(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="programacion" component={Progra}/>
            <Stack.Screen name="javascript" component={Javascript}/>


            <Stack.Screen name="react" component={IReact}/>

             

          

        </Stack.Navigator>

    )
}
