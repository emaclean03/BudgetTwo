import React, {useEffect, useReducer, useState} from "react";
import MainLayout from "../Layouts/MainLayout";
import {Link, usePage} from "@inertiajs/inertia-react";
import {IAllBudgets, ISharedPropsInterface} from "../interface";
import TrashCan from "../Components/Budget/TrashCan";

import {BudgetReducer} from "../reducers/Budget/BudgetReducer";
import axios from "axios";


const Home = ({all_budgets}: IAllBudgets) => {
    const {user} = usePage<ISharedPropsInterface>().props
    const [budgetName, setBudgetName] = useState<string>('');

    const [budget, dispatch] = useReducer(
        BudgetReducer,
        all_budgets,
    );

    const createBudget = () => {
        let newBudgetName = prompt("Name of new budget: ")
        axios.post('/budget/', {budget_name:newBudgetName})
            .then((res) => {
                console.log(res.data);
                dispatch({
                    type: 'add',
                    budget:{
                        budget_name: res.data.budget_name,
                        budget_id: res.data.id,
                    }
                });
            })
    }

    useEffect(() => {
        console.log(budget)
    }, [])

    const handleDeleteBudget = (id:number) => {
        axios.post(`/budget/${id}/delete`, id)
            .then((res) => {
                dispatch({
                    type: 'delete',
                    budget:{
                        budget_id: id
                    }
                });
            })
    }

    return (
        <MainLayout>
            <div className={'flex-auto'}>
                {user &&   <button type="button"
                                   onClick={createBudget}
                                   className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight
                    uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg
                     focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150
                     ease-in-out">Create Budget
                </button>}
            </div>
            {user ?
                budget!.map((item: { id: number, budget_name: string }) => {
                    return <div key={item.id} className="flex justify-center">
                        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm m-6">
                            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{item.budget_name}</h5>
                            <Link
                                className={'inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'}
                                href={`/budget/${item.id}`} as={'button'}>Select Budget</Link>
                                <button title={'Delete this budget'} onClick={(e) => handleDeleteBudget(item.id)} className={'mt-2 ml-4 float-right'}><TrashCan/></button>
                        </div>
                    </div>
                })
                :
                <p>Hello guest.</p>
            }

        </MainLayout>
    );
};

export default Home;