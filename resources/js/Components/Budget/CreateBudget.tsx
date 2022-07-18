import React, {useState} from "react";
import {Inertia} from "@inertiajs/inertia";
import budget from "../../Pages/Budget/Budget";
import axios from "axios";

type NewBudget = {
    name: string;
}


const CreateBudget = (onClick: ()=>{}) => {
    const [budgetName, setBudgetName] = useState<NewBudget>({name: 'New Budget'});

    const createBudget = () => {

    }

    return(
        <>
            <button type="button"
                    onClick={createBudget}
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight
                    uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg
                     focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150
                     ease-in-out">Create Budget
            </button>
        </>
    )
}

export default CreateBudget;