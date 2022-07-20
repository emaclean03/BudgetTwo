<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\BudgetController;
use App\Http\Controllers\TransactionController;
use App\Models\Budget;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function(){
    return Inertia::render('Home', [
        //probably use soft-deleted here
        'all_budgets'=>Budget::all(),
    ]);
});

Route::prefix('budget')->middleware('auth')->group(function () {
    Route::get('/{budget}', [BudgetController::class, 'index'])->name('Budget.index');
    Route::post('/', [BudgetController::class, 'store'])->name('Budget.store');
    Route::post('/{budget}/delete', [BudgetController::class, 'destroy'])->name('Budget.destroy');
    //create new budget
});

Route::prefix('account')->middleware('auth')->group(function () {
    Route::get('/{account}/show', [AccountController::class, 'show'])->name('Account.index'); //show single account
    Route::get('/create', [AccountController::class, 'create'])->name('Account.create'); //Create a new account
    Route::post('/store', [AccountController::class, 'store'])->name('Account.store'); //store a new account
});

Route::prefix('transaction')->middleware('auth')->group(function () {
    Route::post('/{account}/transaction', [TransactionController::class, 'store'])->name('Transaction.store'); //show single account
});

require __DIR__ . '/auth.php';

