<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAccountRequest;
use App\Http\Requests\UpdateAccountRequest;
use App\Models\Account;
use App\Models\Budget;
use App\Models\Category;
use App\Models\Transaction;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Redis;
use Inertia\Inertia;
use Inertia\Response;

class AccountController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreAccountRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreAccountRequest $request)
    {
        try {
            Account::create([
                'budget_id' => Redis::get('current_budget_id'),
                'account_name' => $request->account_name,
                'account_type' => $request->account_type,
                'account_balance' => $request->account_balance
            ]);
        } catch (\Exception $e) {
            Log::error('Error creating new account: ' . $e->getMessage());
        }


        return Redirect::back();
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Account $account
     * @return \Inertia\Response
     */
    public function show(Account $account)
    {
        $budget = Budget::findOrFail(Redis::get('current_budget_id'));

        return Inertia::render('Account/Account', [
            'account' => $account,
            'budget' => $account->budget()->first(),
            'all_transactions' => $account->transaction()->with('category')->get(),
            'categories' => Category::all(),
            'all_accounts' => $budget->account()->get(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Account $account
     * @return \Illuminate\Http\Response
     */
    public function edit(Account $account)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateAccountRequest $request
     * @param \App\Models\Account $account
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateAccountRequest $request, Account $account)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Account $account
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Account $account)
    {
        //Get current budget so we can redirect back to it
        $budget = $account->budget->id;
        try {
            //Delete transactions
            //Delete account
            $account->transaction()->delete();
            $account->delete();
        } catch (Exception $e) {
            Log::error($e->getMessage());
            return Redirect("/budget/${budget}")->with('error', 'There was an error deleting this account.');
        }

        return Redirect("/budget/${budget}")->with('success', 'Successfully deleted account.');
    }
}
