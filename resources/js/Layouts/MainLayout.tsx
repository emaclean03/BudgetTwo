import React from "react";
import Navigation from "./Navigation";
import SideNavigation from "./SideNavigation";


const MainLayout = ({children}: any) => {
    return (
        <>
            <Navigation/>
            <div className="w-full flex flex-col sm:flex-row flex-grow overflow-hidden">
                <SideNavigation/>
                <main role="main" className="w-full h-full bg-gray-200 rounded-lg m-3 flex-grow p-3 overflow-auto">
                    {children}
                </main>
            </div>
        </>
    )
}

export default MainLayout;