import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyStack from './src/navigation';
import React from 'react';
import Colors from './src/Constants/Colors';
import ColorsPremium from './src/Constants/ColorsPremium';
import { AuthContext, AuthProvider } from './src/Context/Auth';
import { useEffect } from 'react';


export default function App() {

  const [colors,setColors] = React.useState();


  return (
        <AuthProvider>
          <NavigationContainer>
              <MyStack/>
          </NavigationContainer>
        </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
