import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect,useContext } from 'react';
import { View,Text } from 'react-native';
import { AuthContext } from '../Context/Auth';
import Colors from '../Constants/Colors';


const Home = (props) =>{

    const {colors} =  useContext(AuthContext);

     useEffect(()=>{
        console.log(colors);
    },[])  

    return(
        <View style={{backgroundColor: colors.cores.primary}}>
            <Text> Tela de Home</Text>
        </View>
    );
}

export default Home;