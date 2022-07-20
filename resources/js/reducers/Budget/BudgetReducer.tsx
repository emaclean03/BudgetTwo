export function BudgetReducer(
    budgets: any[],
    action: { type: string; budget:{budget_name?:string, budget_id?:number}; }
) {
    switch (action.type) {
        case 'add': {
            return [...budgets, {
                budget_name: action.budget.budget_name,
                id: action.budget.budget_id,
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
             return budgets.filter(t => t.id !== action.budget.budget_id);
         }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}