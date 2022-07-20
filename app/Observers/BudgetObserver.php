<?php

namespace App\Observers;

use App\Models\Account;
use App\Models\Budget;
use Illuminate\Support\Facades\Auth;

class BudgetObserver
{
    /**
     * Handle to the post "creating" event.
     *
     * @param  \App\Models\Account  $account
     * @return void
     */
    public function creating(Budget $budget)
    {
        $budget->user_id = Auth::user()->id;
    }

    /**
     * Handle the Budget "created" event.
     *
     * @param  \App\Models\Budget  $budget
     * @return void
     */
    public function created(Budget $budget)
    {
        //
    }

    /**
     * Handle the Budget "updated" event.
     *
     * @param  \App\Models\Budget  $budget
     * @return void
     */
    public function updated(Budget $budget)
    {
        //
    }

    /**
     * Handle the Budget "deleted" event.
     *
     * @param  \App\Models\Budget  $budget
     * @return void
     */
    public function deleted(Budget $budget)
    {
        //
    }

    /**
     * Handle the Budget "restored" event.
     *
     * @param  \App\Models\Budget  $budget
     * @return void
     */
    public function restored(Budget $budget)
    {
        //
    }

    /**
     * Handle the Budget "force deleted" event.
     *
     * @param  \App\Models\Budget  $budget
     * @return void
     */
    public function forceDeleted(Budget $budget)
    {
        //
    }
}
