export function AccountReducer(
    accounts: any[],
    action: { type: string; account_name: string, account_id: number, }
) {
    switch (action.type) {
        case 'add': {
            return [...accounts, {
                account_name: action.account_name,
                id: action.account_id,
            }];
        }
        /* case 'changed': {
             return transactions.map(t => {
                 if (t.id === action.task.id) {
                     return action.task;
                 } else {
                     return t;
                 }
             });
         }*/
        case 'delete': {
           // return budgets.filter(t => t.id !== action.budget.budget_id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}