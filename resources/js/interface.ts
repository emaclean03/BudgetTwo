export interface IAuth {
    user?: {
        id: number,
        name: string,
        email: string,
    }
}

export interface IBudget {
    budget: {
        budget_name: string,
        id: number,
    },
}

export interface IAllBankAccounts {
    all_accounts: [{
        id: number,
        account_name: string,
        account_type: string,
        account_balance: number,
    }]
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

