import React, { useContext, useEffect } from "react";
import {createStackNavigator} from '@react-navigation/stack';
import Deposit from "../screens/operations/Deposit";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Transaction from "../screens/operations/Transaction";
import Home from "../screens/Home";
import { TabActions } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Element3 from "../screens/operations/element3";
import Cobrar from "../screens/operations/Cobrar";
import Pagar from "../screens/operations/Pagar";
import ConfirmarPagamento from "../screens/operations/ConfirmacaoPagamento";
import { AuthContext } from "../Context/Auth";


 const tab = createBottomTabNavigator();
function PrincipalNavegation(){

    return( 
    <tab.Navigator
        initialRouteName="transacoes"
    >
        <tab.Screen name="transacoes" component={Transaction}      
        />
        <tab.Screen name="home" component={Home}/>
    </tab.Navigator>

    );
}   

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
            <Stack.Screen name="cobrar" component={Cobrar} />
            <Stack.Screen name ="pagar" component={Pagar} />
            <Stack.Screen name="confirmar" component={ConfirmarPagamento} />
        </Stack.Navigator>
    )
}

export default MyStack;
