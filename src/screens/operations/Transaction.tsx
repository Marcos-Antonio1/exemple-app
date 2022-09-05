import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { List } from 'react-native-paper';


const Transaction = () =>{
    
    const navigation = useNavigation()
    return(
    <List.Item
        title="First Item"
        description="Item description"
        onPress={()=>{
            navigation.navigate('deposit')
        }}    
    />
    );
}

export default Transaction;