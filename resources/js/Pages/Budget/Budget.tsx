import React, {useContext, useEffect} from "react";
import MainLayout from "../../Layouts/MainLayout";
import {BudgetContext} from "../../Contexts/Budget/Budget";

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

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 compact">
                            <thead
                                className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Assigned
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Activity
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Available
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-6 py-4">
                                    Sliver
                                </td>
                                <td className="px-6 py-4">
                                    Laptop
                                </td>
                                <td className="px-6 py-4">
                                    $2999
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    Microsoft Surface Pro
                                </th>
                                <td className="px-6 py-4">
                                    White
                                </td>
                                <td className="px-6 py-4">
                                    Laptop PC
                                </td>
                                <td className="px-6 py-4">
                                    $1999
                                </td>

                            </tr>
                            <tr className="bg-white dark:bg-gray-800">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    Magic Mouse 2
                                </th>
                                <td className="px-6 py-4">
                                    Black
                                </td>
                                <td className="px-6 py-4">
                                    Accessories
                                </td>
                                <td className="px-6 py-4">
                                    $99
                                </td>

                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </MainLayout>
        </BudgetContext.Provider>
    )
}

export default Budget;