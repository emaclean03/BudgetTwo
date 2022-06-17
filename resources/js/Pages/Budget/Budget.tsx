import React, {useContext, useEffect} from "react";
import MainLayout from "../../Layouts/MainLayout";
import {BudgetContext} from "../../Contexts/Budget/Budget";
import BudgetTable from "./BudgetTable";

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
                        Button one
                    </div>
                </div>
                <div className={'container rounded-md border-2 border-black'}>
                    <BudgetTable/>
                 </div>
            </MainLayout>
        </BudgetContext.Provider>
    )
}

export default Budget;