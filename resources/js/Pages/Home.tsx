import React, {useEffect} from "react";
import MainLayout from "../Layouts/MainLayout";
import {Link, usePage} from "@inertiajs/inertia-react";
import {IAllBankAccounts, IPropsInterface} from "../interface";

const Home = ({all_budgets}:any) => {
    const { user, accounts } = usePage<IPropsInterface>().props

    return (
        <MainLayout budget={null}>
            {user  ?
                    all_budgets!.map((item: any) => {
                        return <div key={item.id} className="flex justify-center">
                            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm m-6">
                                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{item.budget_name}</h5>
                                <Link
                                    className={'inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'}
                                    href={`/budget/${item.id}`} as={'button'}>Select Budget</Link>
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