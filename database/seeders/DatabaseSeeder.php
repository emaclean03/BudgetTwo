<?php

namespace Database\Seeders;

use App\Models\Account;
use App\Models\Budget;
use App\Models\Category;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Auth;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //Create a user, and for each user, add a Budget
        User::factory(1)->create(['email'=>'emaclean03@aol.com'])->each(function ($user) {
            //Create a budget, and for each budget creat a bank account
            $user->budget()->save(Budget::factory()->make())->each(function ($budget) use ($user) {
                //Create new account, bind it to budget and user_id
                $budget->account()->save(Account::factory()->make(['user_id'=>$user->id, 'account_name'=>'PNC Joint Checking', 'account_type'=>'Checking']))
                    ->each(function ($account) use ($user, $budget){
                                $category = Category::factory(10)->create(['user_id'=>$user->id, 'budget_id'=>$budget->id]);
                                $account->transaction()->save(Transaction::factory()->make(['user_id'=>$user->id, 'budget_id'=>$budget->id, 'account_id'=>$account->id, 'category_id'=>$category->first()->id]));

                        //Create some transactions
                });
            });
        });
    }
}
