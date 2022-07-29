<?php

namespace Tests\Feature\Budget;

use App\Models\Budget;
use App\Models\Category;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
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

    public function test_budget_has_categories(): void
    {
        $budget = Budget::factory()->hasCategory(3)->create();
        $response = $this->get('budget/' . $budget->id);

        $response->assertInertia(fn (AssertableInertia $page) =>$page
            ->component('Budget/Budget')
            ->has('all_categories',3, fn (AssertableInertia $page) => $page
                ->where('id', $budget->category()->first()->id)
                ->where('user_id', $this->user->id)
                ->where('category_name', $budget->category()->first()->category_name)
                ->where('category_amount_assigned', $budget->category()->first()->category_amount_assigned)
                ->where('category_amount_activity', $budget->category()->first()->category_amount_activity)
                ->where('budget_id', $budget->id)
                ->etc()
            )
        );
    }

    public function test_can_store_a_new_category(): void
    {
        $budget = Budget::factory()->create()->id;
        $category = Category::factory()->make();

        $this->post("/category/${budget}/", $category->toArray())
        ->assertStatus(302);

        $this->assertDatabaseHas('categories', $category->toArray());
    }

    public function test_can_delete_a_category(): void
    {
        $budget = Budget::factory()->create();
        $category = Category::factory()->make();

        $budget->category()->save($category);

        $id = $category->id;
        $this->post("/category/${id}/delete", $category->toArray())
            ->assertStatus(302);

        $this->assertDatabaseMissing('categories', $category->toArray());
    }

}
