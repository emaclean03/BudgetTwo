import React, {useContext, useEffect} from "react";
import Navigation from "./Navigation";
import SideNavigation from "./SideNavigation";

import {usePage} from "@inertiajs/inertia-react";
import {IAuth, IPropsInterface} from "../interface";
import {Page} from "@inertiajs/inertia";



const MainLayout = ({children, budget}: any) => {
    const {user, accounts} = usePage<IPropsInterface>().props;

    useEffect(() => {
        console.log(accounts);
    }, [])
    return (
        <>
            <Navigation/>
            <div className="w-full flex flex-col sm:flex-row flex-grow overflow-hidden">
                {/*This means were inside a budget*/}
                {user && budget &&
                    <SideNavigation budget={budget} accounts={accounts}/>
                }
                <main role="main"
                      className="w-full h-full bg-gray-200 rounded-lg m-3 flex-grow p-3 overflow-auto">
                    {children}
                </main>
            </div>
        </>
    )
}

export default MainLayout;