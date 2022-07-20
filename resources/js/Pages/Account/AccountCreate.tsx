import React, {useReducer} from "react";
import axios from "axios";
import {usePage} from "@inertiajs/inertia-react";
import {ISharedPropsInterface} from "../../interface";
import {AccountReducer} from "../../reducers/Account/accountReducer";



const AccountCreate = () => {
    const { accounts } = usePage<ISharedPropsInterface>().props;

    const [account, dispatch] = useReducer(
        AccountReducer,
        accounts as [{}],
    );

    const handleCreateAccount = () => {
        const newAccountPrompt = prompt('What is your new account name?');

        axios.post('/account/store', {account_name: 'test', budget_id: 1})
            .then((res:any) => {
                dispatch({
                    type: 'add',
                    account_name: 'test',
                    account_id: 1,
                });
            })
    }


    return(
        <button className={'text-sm font-semibold text-blue-600'} onClick={handleCreateAccount}>+ New Account</button>
    )
}

export default AccountCreate;