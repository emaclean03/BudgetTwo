<?php

namespace Database\Seeders;

use App\Models\Account;
use App\Models\Budget;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        Budget::factory(1)->create();
       //Account::factory(2)->create();
    }
}
