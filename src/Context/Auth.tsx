import React, { useEffect } from 'react';
import Colors from '../Constants/Colors';
import ColorsPremium from '../Constants/ColorsPremium';


const AuthContext  = React.createContext();


const AuthProvider = (props)=>{
   const [colors,setColors] = React.useState();

    useEffect(()=>{
        setColors(ColorsPremium)
    })
    return(
        <AuthContext.Provider
         value={{
            colors,
            setColors
         }}
        >
            {props.children}
        </AuthContext.Provider>

    );
}

export {
    AuthContext,
    AuthProvider
}