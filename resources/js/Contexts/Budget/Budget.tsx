import React, {createContext} from "react"
import { useContext } from 'react';


export const BudgetContext = createContext({
    'budget_name': '',
    'id': 0,
});


export const BudgetProvider = ({ children }:any) => {
    return (
        <BudgetContext.Provider value={{budget_name: '', id: 0}}>
            { children }
        </BudgetContext.Provider>
    )
}