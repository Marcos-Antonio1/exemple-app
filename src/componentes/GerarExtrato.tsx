import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect,useContext, useState } from 'react';
import { View,Text, Alert } from 'react-native';
import { AuthContext } from '../Context/Auth';
import {ActivityIndicator, Button, TextInput} from 'react-native-paper';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

const GerarExtrato = (props) =>{


    const [name,setName] = useState('');
    const {colors} =  useContext(AuthContext);
    const [isLoading,setIsLoading]= useState(false);
    const [dadosTransacao,setDadosTransacao]= useState([])
     useEffect(()=>{
        trasformeDados()
    },[])

    function trasformeDados(){
        const dados = new Map();

        for (var i in props){
            dados.set(i,props[i]);
        }

        let arr = Array.from(dados)

        setDadosTransacao(arr)
    }
    const html = `<!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>replit</title>
      <style>
        body{ 
          display: flex;
          justify-content: center;
          align-items: center;  
        }
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
    
        .compro {
            margin-top: 15vh;
        }
    
        .title {
          display: flex;
          flex-direction: row;
        }
        h4{ 
            margin-left: 30%;
            font-size: 25px;
        }
        p{ 
            font-size: 20px;
        }
        h6{
            font-size: 20px;
        }
    
      </style>
    </head>
    
    <body>
      <div class="container">
        <div class="compro">
          <h4 class="title">MIBB - DOCUMENTO EMITIDO VIA APP</h4>
          <h6>Data: 06/09/2022 Hora: 11:43:43</h6>
          <h4>Comprovante de Transação</h4>
    
          <p>Cliente: Marcos Antonio pinheiro Silva</p>
          <p> CONTA: CORRENTE N 12 </p>
    
          <span>=========================================================</span>
                <p>conta de destino : POUPANÇA  N 140</p>
                <p>valor : 45,00</p>

          <span>=========================================================</span>
        </div>
      </div>
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

    return(
        <>
            <Button
                onPress={generatePdf}
            > Gerar extrato</Button>
        </>
    );
}

export default GerarExtrato;