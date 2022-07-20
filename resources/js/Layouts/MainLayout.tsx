import React, {useContext, useEffect} from "react";
import Navigation from "./Navigation";
import SideNavigation from "./SideNavigation";

import {usePage} from "@inertiajs/inertia-react";
import {IAuth, ISharedPropsInterface} from "../interface";
import {Page} from "@inertiajs/inertia";



const MainLayout = ({children, budget = null, all_accounts = null}: any) => {
    const {user} = usePage<ISharedPropsInterface>().props;

    return (
        <div>
            <Navigation/>
            <div className="flex bg-gray-100 text-gray-900 min-h-screen">
                {/*This means were inside a budget*/}
                {user && budget &&
                    <SideNavigation budget={budget} all_accounts={all_accounts}/>
                }
                <main role="main" className="w-full bg-gray-200 rounded-lg m-3 flex-grow p-3 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default MainLayout;