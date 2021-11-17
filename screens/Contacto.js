import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AboutScreen from '../screens/AboutScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../navegaciones/StackNavigation1';
import Inicio from '../screens/inicio';
import Github from '../screens/Github';
import Programar from '../screens/programar';
import Contacto1 from '../screens/contacto1';
import Contacto2 from '../screens/contacto2';

const Tab = createBottomTabNavigator();

export default function Contacto(){
    return(
        <Tab.Navigator
            initialRouteName="contacto 1"
            tabBarOptions={{
                activeTintColor:"#ff6600",
                inactiveTintColor:"#060606",
                showLabel:true,
                labelStyle:{
                    fontSize:12
                },
                style:{
                    paddingBottom:5,
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 
           
           <Tab.Screen
                name="contacto 1"
                component={Contacto1}
                options={{
                    
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-home"} size={20} color={color}/>
                    )
                }}
            
            />
            
            <Tab.Screen
                name="contacto 2"
                component={Contacto2}
                options={{
                    
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-settings"} size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}