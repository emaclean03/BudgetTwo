import React, {useContext, useEffect} from "react";
import MainLayout from "../../Layouts/MainLayout";
import {BudgetContext} from "../../Contexts/Budget/Budget";
import BudgetTable from "./BudgetTable";
import {Link} from "@inertiajs/inertia-react";

interface IProps {
    budget: {
        budget_name: string,
        id: number,
    }
}

const Budget = ({budget}: IProps) => {

    return (
        <BudgetContext.Provider value={budget}>
            <MainLayout>
                <div className="container border-black px-6 py-2 flex">
                    <div className={'block'}>
                        {/*Make this into a navigation component*/}
                        <Link className={'text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4'} href={'#'} as={'button'}>Create Category</Link>
                    </div>
                </div>
                <div className={'container rounded-md border-2 border-gray-400'}>
                    <BudgetTable/>
                 </div>
            </MainLayout>
        </BudgetContext.Provider>
    )
}

export default Budget;