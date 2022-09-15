import React from 'react';
import { View,Text,Alert } from 'react-native';
import { Button } from 'react-native-paper';


const Deposit = ({navigation, route}) =>{
    console.log(route.params);
    return(
        <View>
            <Text>Tipo conta: {route.params.checked}</Text>
            <Text>Valor : {route.params.valor}</Text>
            <Button onPress={()=> {Alert.alert("Conta paga com sucesso")}}> confirmar pagamento</Button>
        </View>

    );
}
export default Deposit;