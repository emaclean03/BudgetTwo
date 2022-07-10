import React, {useContext, useEffect} from "react";
import MainLayout from "../../Layouts/MainLayout";
import {usePage} from "@inertiajs/inertia-react";
import {IBudget} from "../../interface";


const Account = ({budget}:IBudget) => {
    const {user, accounts} = usePage().props;

    return (
        <MainLayout budget={budget}>

        </MainLayout>
    )
}


export default Account;