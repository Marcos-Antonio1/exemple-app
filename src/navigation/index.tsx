import React from "react";

import {createStackNavigator} from '@react-navigation/stack';
import Deposit from "../screens/operations/Deposit";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Transaction from "../screens/operations/Transaction";
import Home from "../screens/Home";
import { TabActions } from "@react-navigation/native";
import {
    AnimatedTabBarNavigator,
    DotSize, // optional
    TabElementDisplayOptions, // optional
    TabButtonLayout, // optional
    IAppearanceOptions // optional
  } from 'react-native-animated-nav-tab-bar'

import Ionicons from '@expo/vector-icons/Ionicons';
import Element3 from "../screens/operations/element3";


const Tabs = AnimatedTabBarNavigator();
  
  function PrincipalNavegation (){
    return(
        <Tabs.Navigator
    initialRouteName="home"
    tabBarOptions={{
      activeTintColor: "yellow",
      inactiveTintColor: "red",
    }}
    appearance={{
        shadow:true,
        floating:true,
        tabBarBackground:'yellow',
        horizontalPadding:10,
        bottomPadding:10,
        dotCornerRadius:12,    
    }}
  > 
    <Tabs.Screen name="trans" component={Transaction}
       options={{
         tabBarIcon: ({focused}) =>(
            <Ionicons
                    name="home"
                    size={20}
                    color="red"
            />
         )
       }}
    />
    <Tabs.Screen name="home" component={Home}
        options={{
            tabBarIcon: ({focused}) =>(
               <Ionicons
                       name="home"
                       size={20}
                       color="red"
               />
            )
          }}
    />

    <Tabs.Screen

        name="ele3"
        component={Element3}
        options={{
            tabBarIcon: ({focused}) =>(
               <Ionicons
                       name="home"
                       size={20}
                       color="red"
               />
            )
          }}
    />

  </Tabs.Navigator>
    )
  }




 /* const tab = createBottomTabNavigator();
function PrincipalNavegation(){
    return(
    <tab.Navigator
        initialRouteName="home"
        
    >
        <tab.Screen name="transacoes" component={Transaction}
        
        />
        <tab.Screen name="home" component={Home}/>
    </tab.Navigator>

    );
}   */

const Stack = createStackNavigator();

function MyStack(){
    return(
        <Stack.Navigator
            
            screenOptions={{
                gestureEnabled: true,
                gestureDirection:"horizontal",
                animationTypeForReplace:"pop",
                headerShown:true
            }}
        >
            <Stack.Screen name="home1" component={PrincipalNavegation}
             options={{
                headerShown:false
             }}
            />
            <Stack.Screen name="deposit" component={Deposit} />
        </Stack.Navigator>
    )
}



export default MyStack;
