export function transactionReducer(
    transactions: any[],
    action: { type: string; transaction: { id: any; transaction_payee:string, transaction_outflow:number; transaction_inflow:number, transaction_category:number, }; }
) {
    switch (action.type) {
        case 'add': {
            return [...transactions, {
                id: action.transaction.id,
                transaction_category: action.transaction.transaction_category,
                transaction_payee: action.transaction.transaction_payee,
                transaction_outflow: action.transaction.transaction_outflow,
                transaction_inflow: action.transaction.transaction_inflow,
                cleared: false
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
        }
        case 'deleted': {
            return transactions.filter(t => t.id !== action.id);
        }*/
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
