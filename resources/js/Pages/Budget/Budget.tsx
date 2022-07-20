import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import BudgetTable from "./BudgetTable";
import {Link} from "@inertiajs/inertia-react";
import {IAllBankAccounts, IBudget} from "../../interface";

const Budget = ({budget, all_accounts, account_balance}: {budget:IBudget, all_accounts: IAllBankAccounts, account_balance:number}) => {
    return (
                <MainLayout budget={budget} accounts={all_accounts}>
                    <div className="flex justify-around border-black px-6 py-2 flex">
                        <div className={'block'}>
                            {/*Make this into a navigation component*/}
                            <Link
                                className={'text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4'}
                                href={'#'} as={'button'}>Create Category</Link>
                        </div>
                        <span className="py-1.5 px-2.5 text-center
                       font-bold bg-blue-600 text-white rounded">Balance: ${account_balance}</span>
                    </div>
                    <div className={'container rounded-md border-2 border-gray-400'}>
                        <BudgetTable/>
                    </div>
                </MainLayout>
    )
}

export default Budget;