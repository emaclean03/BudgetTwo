import React, {useReducer} from "react";
import axios from "axios";
import {usePage} from "@inertiajs/inertia-react";
import {ISharedPropsInterface} from "../../interface";
import {AccountReducer} from "../../reducers/Account/accountReducer";
import {Inertia} from "@inertiajs/inertia";


const AccountCreate = () => {
    const handleCreateAccount = () => {
        const newAccountPrompt = prompt('What is your new account name?');
        //TODO: Updated budget_id with redis?
        //TODO: Figure out a way to add account_type and account_balance
        Inertia.post('/account/store',
            {account_name: newAccountPrompt, budget_id: 1, account_type: 'checking', account_balance: 0.00})
    }
    return (
        <button className={'text-sm font-semibold text-blue-600'} onClick={handleCreateAccount}>+ New Account</button>
    )
}

export default AccountCreate;