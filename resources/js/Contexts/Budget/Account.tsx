import React, {createContext} from "react"
import { useContext } from 'react';


export const AccountContext = createContext([{
    'id': 0,
    'account_name': '',
    'account_type': '',
    'account_balance': 0,
}]);


export const BudgetProvider = ({ children }:any) => {
    return (
        <AccountContext.Provider value={[{account_name: '', account_type: '', account_balance:0, id: 0}]}>
            { children }
        </AccountContext.Provider>
    )
}