import React, {useEffect, useState} from "react";
import MainLayout from "../../Layouts/MainLayout";
import BudgetTable from "./BudgetTable";
import {Link} from "@inertiajs/inertia-react";
import {IAll_categories, IAllBankAccounts, IBudget} from "../../interface";
import {Inertia} from "@inertiajs/inertia";
import CustomModal from "../../Components/CustomModal";
import {Button, Input} from "@mui/material";


const Budget = ({budget, all_accounts, account_balance, all_categories}: { budget: IBudget, all_accounts: IAllBankAccounts, account_balance: number, all_categories:IAll_categories }) => {
    const [category, setCategory] = useState({
        category_name: 'New category',
        category_amount_assigned: 0.00,
        category_amount_activity: 0.00,
        category_amount_available: 0.00,
    }); //TODO: Use SetCategory for custom categories (modal?)
    const [isOpen, setIsOpen] = useState(false);

    const handleNewCategoryModalOpen = () => {
        setIsOpen(true);
    }

    const handleNewCategoryModalClose = () => {
        setIsOpen(false);
    }

    const handleNewCategorySave = () => {
        Inertia.post(`/category/${budget.id}/store`, category, {
            onSuccess: () => {
                setIsOpen(false);
            },
        });
    }

    return (
        <MainLayout budget={budget} all_accounts={all_accounts}>
            {/*Modal for creating new category*/}
            <CustomModal isOpen={isOpen} handleClose={handleNewCategoryModalClose} handleSave={handleNewCategorySave} title={'Create category'} subtitle={'Create a new category'}>
                <Input placeholder={'Category Name'} type={'text'} onChange={(e) => setCategory({...category, category_name: e.target.value}) }/>
            </CustomModal>

            <div className="flex justify-around border-black px-6 py-2 flex">
                <div className={'block'}>
                    {/*Make this into a navigation component*/}
                    <Button  onClick={handleNewCategoryModalOpen}>Create Category</Button>
                </div>
                <span className="py-1.5 px-2.5 text-center
                       font-bold bg-blue-600 text-white rounded">Balance: ${account_balance}</span>
            </div>
            <div className={'container rounded-md border-2 border-gray-400'}>
                <BudgetTable categories={all_categories}/>
            </div>
        </MainLayout>
    )
}

export default Budget;