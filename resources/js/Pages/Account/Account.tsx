import React, {useEffect, useReducer} from "react";
import MainLayout from "../../Layouts/MainLayout";
import {IBankAccount, IBudget, IAllTransactions} from "../../interface";
import {transactionReducer} from '../../reducers/Account/transactionReducer';
import axios from "axios";
import AccountTransactionsTable from "../../Components/Account/AccountTransactionsTable";

const Account = ({account, budget, all_transactions}: { account: IBankAccount, budget: IBudget, all_transactions: [] }) => {
    const [transactions, dispatch] = useReducer(
        transactionReducer,
        all_transactions,
    );

    const handleAddTransactions = (transaction:{id: number,transaction_payee:string, transaction_outflow:number, transaction_inflow:number, transaction_category:number,}) => {
       axios.post(`/transaction/${account.id}/transaction`, transaction)
           .then((res:any) => {
               console.log('res data', res.data);
               dispatch({
                   type: 'add',
                   transaction: res.data.transaction,
               });
           })
    }
    return (
        <MainLayout budget={budget}>
            <div className={'flex bg-gray-900 text-gray-100'}>
                <div className={'flex-1'}>{account.account_name}</div>
                <div className={'flex-1 sticky top-0 h-full float-right'}>${account.account_balance}</div>
            </div>
            <hr/>
            <div className={'flex pt-2 bg-gray-900 text-gray-100'}>
                {/*Transaction buttons (Add transaction, bank import, etc)*/}
                <div className={'flex-1'}>
                    <button type="button"
                            onClick={() => handleAddTransactions({id:1, transaction_payee:'eric', transaction_outflow: 100.00, transaction_inflow:0.00, transaction_category: 2,})}
                            className="inline-block px-6 py-1 bg-gray-200 text-gray-700 font-medium text-xs
                            leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg
                             focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400
                              active:shadow-lg transition duration-150 ease-in-out">Add Transaction
                    </button>
                </div>
                <div className={'w-1/2 sticky top-0 h-full'}>Right</div>
            </div>
            <hr/>

            <div className={'flex pt-12 bg-gray-900 text-gray-100'}>
                <div className={'flex-1'}><AccountTransactionsTable all_transactions={transactions}/></div>
            </div>


            {/*Transactions*/}
        </MainLayout>
    )
}


export default Account;