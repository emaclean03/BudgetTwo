import React, {useContext, useEffect} from "react";
import MainLayout from "../../Layouts/MainLayout";
import {BudgetContext} from "../../Contexts/Budget/Budget";
import BudgetTable from "./BudgetTable";
import {Link, usePage} from "@inertiajs/inertia-react";
import {AccountContext} from "../../Contexts/Budget/Account";
import SideNavigation from "../../Layouts/SideNavigation";

interface IProps {
    budget: {
        budget_name: string,
        id: number,
    },
    accounts: [{
        id: number,
        account_name: string,
        account_type: string,
        account_balance: number,
    }],
}

const Budget = ({budget, accounts}: IProps) => {
    const { user } = usePage().props

    return (
                <MainLayout budget={budget} accounts={accounts}>
                    <div className="container border-black px-6 py-2 flex">
                        <div className={'block'}>
                            {/*Make this into a navigation component*/}
                            <Link
                                className={'text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4'}
                                href={'#'} as={'button'}>Create Category</Link>
                        </div>
                    </div>
                    <div className={'container rounded-md border-2 border-gray-400'}>
                        <BudgetTable/>
                    </div>
                </MainLayout>

    )
}

export default Budget;