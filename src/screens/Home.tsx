import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect,useContext, useState } from 'react';
import { View,Text, Alert } from 'react-native';
import { AuthContext } from '../Context/Auth';
import {ActivityIndicator, Button, TextInput} from 'react-native-paper';
import GerarExtrato from '../componentes/GerarExtrato';


const Home = (props) =>{

    const [name,setName] = useState('');
    const {colors} =  useContext(AuthContext);
    const [isLoading,setIsLoading]= useState(false);

     useEffect(()=>{
        console.log(colors);
    },[])
    
    const html = `
        <html>
            <body>
                <h2>Hi ${name} </h2>
            </body>
        </html>
    `
    const generatePdf = async() =>{
        console.log(name)
        const file = await Print.printToFileAsync({
            html:html,
            base64:false
        });
        setIsLoading(false)
        await shareAsync(file.uri)
    }

    const dadosTransacao = {
        valor:400,
        contaOrigem: 2,
        contaDestino:3,
    }

    return(
        <View style={{backgroundColor: colors.cores.primary}}>
            <Text> Tela de Home</Text>
            
            <GerarExtrato
                dados {...dadosTransacao}
            >
            </GerarExtrato>

        </View>
    );
}

export default Home;