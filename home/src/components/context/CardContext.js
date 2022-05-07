import {createContext, useEffect,useState} from "react";

export const CardContext = createContext();

export const CardProvider=(props)=>{
    const[reset, setReset]= useState();
    return(
        <CardContext.Provider value={{reset,setReset}}>
            {props.children}
        </CardContext.Provider>
    )
}