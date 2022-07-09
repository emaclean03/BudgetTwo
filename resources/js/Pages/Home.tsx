import React, {useEffect} from "react";
import MainLayout from "../Layouts/MainLayout";
import {Link} from "@inertiajs/inertia-react";

const Home = ({all_accounts}:any) => {
    useEffect(() => {
        console.log(all_accounts);
    }, [])

    return (
        <MainLayout>
            {all_accounts.map((item:any) => {
                return <div className="flex justify-center">
                    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm m-6">
                        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{item.budget_name}</h5>
                        <Link
                            className={'inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'}
                            href={`/budget/${item.id}`} as={'button'}>Select Budget</Link>
                    </div>
                </div>
            })}
        </MainLayout>
    );
};

export default Home;