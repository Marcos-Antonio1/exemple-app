import { useNavigation } from '@react-navigation/native';
import React, { Fragment } from 'react';
import { List } from 'react-native-paper';


const Transaction = () =>{
    
    const navigation = useNavigation()
    return(
        <Fragment>
            <List.Item
        title="First Item"
        description="Item description"
        onPress={()=>{
            navigation.navigate('deposit')
        }}    
    />
    <List.Item
        title="Cobrar"
        description="Item description"
        onPress={()=>{
            navigation.navigate('cobrar')
        }}    
    />

    <List.Item
        title="Pagar com qrcode"
        description="Item description"
        onPress={()=>{
            navigation.navigate('pagar')
        }}    
    />
        </Fragment>
    );
}

export default Transaction;