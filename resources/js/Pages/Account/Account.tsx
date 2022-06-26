import React, {useContext, useEffect} from "react";
import MainLayout from "../../Layouts/MainLayout";

interface IProps{
    account:{
        id: number,
        account_name:string,
        account_type: string,
        account_balance: number,
    }
}

const Account = ({account}:IProps) => {
    useEffect(() => {
        console.log(account);
    }, [])
    return (
        <MainLayout>

        </MainLayout>
    )
}

export default Account;