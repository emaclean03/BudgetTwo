import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import {IBankAccount, IBudget} from "../../interface";
import SideNavigation from "../../Layouts/SideNavigation";


const Account = ({account, budget}: { account: IBankAccount, budget: IBudget }) => {
    return (
        <MainLayout budget={budget}>
            <div className={'flex bg-gray-600 text-gray-100'}>
                <div className={'flex-1'}>{account.account_name}</div>
                <div className={'flex-1 sticky top-0 h-full float-right'}>${account.account_balance}</div>
            </div>
            <hr/>
            <div className={'flex pt-2 bg-gray-900 text-gray-100'}>
                {/*Transaction buttons (Add transaction, bank import, etc)*/}
                <div className={'flex-1'}>Add Transaction</div>
                <div className={'w-1/2 sticky top-0 h-full'}>Right</div>
            </div>
            <hr/>

            <div className={'flex pt-12 bg-gray-900 text-gray-100'}>
                <div className={'flex-1'}>Table for transactions</div>
            </div>


            {/*Transactions*/}
        </MainLayout>
    )
}


export default Account;