import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AboutScreen from '../screens/AboutScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Constants from 'expo-constants';
import Inicio from '../screens/inicio';
import Github from '../screens/Github';
import Programar from '../navegaciones/StackNavigation1';
import Contacto from '../screens/Contacto';

const Tab =  createMaterialTopTabNavigator();

export default function TopTapNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="Inicio"
            tabBarOptions={{
                activeTintColor:"#ff6600",
                inactiveTintColor:"#060606",
                showIcon:true,
                showLabel:true,
                labelStyle:{
                    fontSize:11
                },
                style:{
                    paddingTop:Constants.statusBarHeight,
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
                name="Github"
                component={Github}
                options={{
                    tabBarLabel:"Github",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"logo-github"} size={20} color={color}/>
                    )
                }}
            />
               <Tab.Screen
                name="Programar"
                component={Programar}
                options={{
                    tabBarLabel:"programar",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"code-working"} size={20} color={color}/>
                    )
                }}
            />
              <Tab.Screen
                name="contacto"
                component={Contacto}
                options={{
                    tabBarLabel:"Contacto",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"contact"} size={20} color={color}/>
                       
                    )
                }}
            />
            
            <Tab.Screen
                name="About"
                component={AboutScreen}
                options={{
                    tabBarLabel:"Acerca de",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-help-circle"} size={20} color={color}/>
                    )
                }}
            />
            
        </Tab.Navigator>
    )
}