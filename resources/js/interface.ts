import {Page, PageProps} from "@inertiajs/inertia";

export interface IAuth {
    user?: {
        id: number,
        name: string,
        email: string,
    }
}
//Single budget
export interface IBudget {
    budget: {
        budget_name: string,
        id: number,
    },
}

//Single bank account
export interface IBankAccount{
        id: number,
        account_name: string,
        account_balance: number,
}
//All bank accounts
export interface IAllBankAccounts {
    all_accounts: [{
        id: number,
        account_name: string,
        account_type: string,
        account_balance: number,
    }]
}


export interface IAllTransactions {
    all_transactions: [{
        id: number,
        transaction_payee: string,
        transaction_outflow: number,
        transaction_inflow: number,
    }];
}

export interface ISideNaviationProps {
    budget: {
        id: number,
        budget_name: string,
    },
    accounts: [{
        account_name: string,
        account_balance: number,
    }]
}

/*Tables*/

export interface ColumnDetails {
    [key: string]: string
}


export interface IPropsInterface extends Page<PageProps> {
    props: {
        errors: any,
        user?: {
            id: number,
            name: string,
            email: string,
        },
        accounts?: [{
            id: number,
            account_name: string,
            account_balance: number,
            account_type:string,
            budget_id: number,
            user_id: number,
        }]
    }
}
