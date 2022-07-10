import React, {createContext} from "react"
import { useContext } from 'react';


export const UserContext = createContext({user:{}});



/*
export const UserProvider = ({ children }:any) => {
    return (
        <UserContext.Provider value={user:{}}>
            { children }
        </UserContext.Provider>
    )
}*/
