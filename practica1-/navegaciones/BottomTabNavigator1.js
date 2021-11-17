import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AboutScreen from '../screens/AboutScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../navegaciones/StackNavigation1';
import Inicio from '../screens/inicio';
import Github from '../screens/Github';
import Programar from '../screens/programar';
import Contacto from '../screens/Contacto';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="Inicio"
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
                name="Inicio"
                component={Inicio}
                options={{
                    tabBarLabel:"Inicio",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-home"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="GITHUB"
                component={Github}
                options={{
                    tabBarLabel:"GITHUB",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-settings"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Programar"
                component={Programar}
                options={{
                    tabBarLabel:"Programar",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-help-circle"} size={20} color={color}/>
                    )
                }}
            />
             <Tab.Screen
                name="Contacto"
                component={Contacto}
                options={{
                    tabBarLabel:"contactos",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-settings"} size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}