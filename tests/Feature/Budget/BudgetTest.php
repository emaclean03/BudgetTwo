<?php

namespace Tests\Feature\Budget;

use App\Models\Budget;
use App\Models\Category;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Redis;
use Tests\TestCase;

class BudgetTest extends TestCase
{
    use RefreshDatabase;

    private mixed $user;
    private mixed $category;

    public function setUp(): void
    {
        parent::setUp();
        /*Log in as user as this will all be behind the log in wall*/
        $this->user = User::factory()->create();
        $this->actingAs($this->user);
    }

    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_budget_can_be_created(): void
    {
        $budget = Budget::factory()->make();
        $response = $this->post('/budget', $budget->toArray());
        $this->assertDatabaseHas('budgets', $budget->toArray());
        $response->assertStatus(200);
    }

    public function test_budget_can_be_deleted(): void
    {
        $budget = Budget::factory()->create();
        $id = $budget->id;

        $response = $this->post("/budget/${id}/delete");
        $this->assertModelMissing($budget);

        $response->assertRedirect('/');
    }

    public function test_budget_can_be_navigated_to(): void
    {
        $budget = Budget::factory()->create();
        $response = $this->get('budget/' . $budget->id);

        $response->assertStatus(200);
    }
}
