<?php

namespace Tests\Feature\Account;

use App\Models\Account;
use App\Models\Budget;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Redis;
use Inertia\Testing\Assert;
use Tests\TestCase;

class AccountTest extends TestCase
{
    use RefreshDatabase;

    private $budget;
    private $budget_id;

    public function setUp(): void
    {
        parent::setUp();
        /*Log in as user as this will all be behind the log in wall*/
        $this->user = User::factory()->create();
        $this->actingAs($this->user);
        $this->budget = Budget::factory()->create();
        Redis::set('current_budget_id', $this->budget->id);

        $this->budget_id = Redis::Get('current_budget_id');
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_can_navigate_to_a_budget()
    {
        $account = Account::factory()->create([
            'budget_id'=>$this->budget_id
        ]);

        $response = $this->get("/account/".$account->id.'/show')
          ->assertInertia(fn ($page) => $page
                ->component('Account/Account')
                ->has('account', fn ($page) => $page
                    ->where('id', $account->id)
                    ->where('account_name', $account->account_name)
                    ->etc()
                )
    );

        $response->assertStatus(200);
    }

    public function test_user_can_delete_an_account()
    {
        $account = Account::factory()->create([
            'budget_id' => Redis::get('current_budget_id')
        ]);

        $accountId = $account->id;
        $response = $this->post("/account/${accountId}/delete");

        $response->assertStatus(302);
        $this->assertModelMissing($account);
    }
}
