import React, {useContext, useEffect} from "react";
import MainLayout from "../../Layouts/MainLayout";
import {usePage} from "@inertiajs/inertia-react";


const Account = () => {
    const {user, accounts} = usePage().props;

    return (
        <MainLayout>

        </MainLayout>
    )
}


export default Account;