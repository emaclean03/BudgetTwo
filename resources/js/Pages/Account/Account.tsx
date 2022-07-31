import React, {useEffect, useReducer} from "react";
import MainLayout from "../../Layouts/MainLayout";
import {IBankAccount, IBudget, IAllTransactions, IAllBankAccounts} from "../../interface";
import AccountTransactionsTable from "../../Components/Account/AccountTransactionsTable";
import {Inertia} from "@inertiajs/inertia";

const Account = ({account, budget, all_transactions, all_accounts}: { account: IBankAccount, budget: IBudget, all_transactions: [], all_accounts: IAllBankAccounts[] }) => {
    const handleAddTransactions = (transaction: { id: number, transaction_payee: string, transaction_outflow: number, transaction_inflow: number, transaction_category: number, }) => {
     Inertia.post(`/transaction/${account.id}/transaction`, transaction);
    }
    const handleDeleteAccount = () => {
        confirm("Are you sure you wish to delete this account? This will remove ALL transactions") && Inertia.post(`/account/${account.id}/delete`)
    }

    return (
        <MainLayout budget={budget} all_accounts={all_accounts}>
            <div className={'flex flex-row items-center justify-center bg-gray-600 text-gray-100 rounded-sm'}>
                <div className={'w-1/3'}>
                    <div className={''}>Account: {account.account_name}</div>
                </div>
                <div className={'w-1/3'}>
                    {account.account_balance >= 0.00 ?
                        <span
                            className="inline-block py-1.5 px-2.5 leading-none text-center float-right whitespace-nowrap align-baseline font-bold bg-green-600 text-white rounded">${account.account_balance}</span>
                        :
                        <span
                            className="inline-block py-1.5 px-2.5 leading-none text-center float-right whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded">${account.account_balance}</span>

                    }
                </div>
                <div className={'w-1/3'}>
                    <button className={'float-right mr-4 font-bold'} onClick={handleDeleteAccount}>Delete Account</button>
                </div>
            </div>
            <hr className={'m-2'}/>
            <div className={'flex pt-2 bg-gray-900 text-gray-100'}>
                {/*Transaction buttons (Add transaction, bank import, etc)*/}
                <div className={'flex-1'}>
                    <button type="button"
                            onClick={() => handleAddTransactions({
                                id: 1,
                                transaction_payee: 'eric',
                                transaction_outflow: 100.00,
                                transaction_inflow: 0.00,
                                transaction_category: 2,
                            })}
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
                <div className={'flex-1'}><AccountTransactionsTable all_transactions={all_transactions}/></div>
            </div>


            {/*Transactions*/}
        </MainLayout>
    )
}


export default Account;