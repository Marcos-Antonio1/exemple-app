import React,{useState} from 'react';
import { View, StyleSheet,Text} from 'react-native';
import { Button, RadioButton, TextInput } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';
const Cobrar = () =>{
    const[valor,setValor] = useState(0) 
    const [qrValue, setQrValue] = useState();
    const [checked,setChecked] = useState("corrente")
    return(
        <View>
            <TextInput
                label="Valor a cobrar"
                keyboardType='numeric'
                value={valor}
                onChangeText={valor =>setValor(valor)}
            />
              <View>
                <Text>Receber Em</Text>
                <RadioButton
                    value="corrente"
                    status={ checked === 'corrente' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('corrente')}
                /> 
                <RadioButton
                    value="poupanca"
                    status={ checked === 'poupanca' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('poupanca')}
                />
                </View>

            <Button
                onPress={()=>{gerarQrcode()}}
            > Gerar qrcode  </Button>
            <View style={styles.containerQr}>
            {qrValue ? <QRCode 
                value={qrValue ? qrValue : 'NA'} 
                size={250} 
                color="black" 
                backgroundColor="white" 
                logoSize={30} 
                logoMargin={2} 
                logoBorderRadius={15} 
                logoBackgroundColor="yellow" 
            /> : 
              <>
              </>
            } 
            </View>
        </View> 
    );

    function gerarQrcode(){
        let dadosqrcode = {
            valor,
            checked
        }

        const dados = JSON.stringify(dadosqrcode);
        
        setQrValue(dados)
        
    }
}

const styles = StyleSheet.create({
    containerQr: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:200
    },
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      fontSize: 20,
      textAlign: 'center',
      margin: 5,
    },
    textInput: {
      flexDirection: 'row',
      height: 40,
      marginTop: 20,
      marginLeft: 10,
      marginRight: 10,
      margin: 10,
      borderWidth: 1,
    },
  });

export default Cobrar;